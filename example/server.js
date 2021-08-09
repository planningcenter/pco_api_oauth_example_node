require('dotenv').config();
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const session = require('express-session')
const PCOApi = require('../lib/pco')

const app = express();
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.set('json spaces', 2);

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const redirect = encodeURIComponent('http://localhost:50451/oauth/callback');

app.use(session({
  secret: 'isitsecretisitsafe',
  name: 'uniqueSessionID',
  saveUninitialized: false,
  resave: false,
}))

app.get('/login', (req, res) => {
  res.redirect(`https://api.planningcenteronline.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirect}&response_type=code&scope=people registrations check_ins calendar giving groups services`)
});

app.get('/logout', async (req, res) => {
  await fetch(`https://api.planningcenteronline.com/oauth/revoke`,
    {
      method: 'POST',
      body: JSON.stringify( { data: { token: req.session.accessToken }}),
      headers: {
        Accept: "application/javascript",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${req.session.accessToken}`,
      }
    });

  req.session.accessToken = undefined
  req.session.refreshToken = undefined
  req.session.loggedIn = false

  res.redirect(`/`)
});

app.get('/oauth/callback', async (req, res) => {
  if (!req.query.code) throw new Error('NoCodeProvided');
  const code = req.query.code;
  const response = await fetch(`https://api.planningcenteronline.com/oauth/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    {
      method: 'POST'
    });
  const json = await response.json();
  req.session.accessToken = json.access_token
  req.session.refreshToken = json.refresh_token
  req.session.loggedIn = true
  PCOApi.configureClient({ oauthAccessToken: json.access_token })
  app.use('/', require('./routes/vertex'));
  res.redirect('/apps');
});

app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/', require('./routes/apps'));

app.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/apps')
  } else {
    res.status(200).render('login')
  }
});

app.listen(50451, () => {
  console.info('Running on port 50451');
});