const express = require('express');
const router = express.Router();
const pcoClient = require('../../lib/pco').getClient()
const schema = require('../../lib/schema')
const pluralize = require('pluralize')
const { syntaxHighlight } = require('../utils')

const asycErrors = fn => (
  (req, res, next) => {
    const routePromise = fn(req, res, next);
    if (routePromise.catch) {
      routePromise.catch(err => {
        console.log(err)
        res.render('errors', { err });
      })
    }
  }
);

router.get('/:app/:vertex', asycErrors(async (req, res) => {
  const app = req.params.app.replace(/^\w/, (c) => c.toUpperCase())
  res.render('vertex', {
    app, vertexName: req.params.vertex, appPath: schema[app].appPath, vertex:
      schema[app].resources[req.params.vertex]
  });
}))

router.post('/:app/:vertex/get', asycErrors(async (req, res) => {
  res.redirect(`/${req.params.app}/${req.params.vertex}/${req.body.id}`)
}))

router.get('/:app/:vertex/list', asycErrors(async (req, res) => {
  const app = req.params.app.replace(/^\w/, (c) => c.toUpperCase())
  const list = await pcoClient[app][req.params.vertex].list()
  res.render('list', { listItems: list.data, app, vertexName: req.params.vertex, rawJSON: syntaxHighlight(JSON.stringify(list, undefined, 4)) })
}))

router.get('/:app/:vertex/new', asycErrors(async (req, res) => {
  const app = req.params.app.replace(/^\w/, (c) => c.toUpperCase())
  res.render(`resources/new_${pluralize.singular(req.params.vertex)}`, { app, vertexName: req.params.vertex, postPath: `/${req.params.app}/${req.params.vertex}` })
}))

router.post('/:app/:vertex/', asycErrors(async (req, res) => {
  const app = req.params.app.replace(/^\w/, (c) => c.toUpperCase())
  const newThing = await pcoClient[app][req.params.vertex].create({
    data: {
      type: pluralize.singular(req.params.vertex), attributes: req.body
    }
  })
  res.redirect(`/${req.params.app}/${req.params.vertex}/${newThing.data.id}`)
}))

router.get('/:app/:vertex/:id([0-9]+)', asycErrors(async (req, res) => {
  const app = req.params.app.replace(/^\w/, (c) => c.toUpperCase())
  const item = await pcoClient[app][pluralize.singular(req.params.vertex)].get(req.params.id)
  if (item.data.relationships.people) {
    let people = await Promise.all(item.data.relationships.people.data.map(async (person) => {
      const p = await pcoClient[app].people.get(person.id)
      return p.data
    }))
    item.data.relationships.people.data = people
  }
  res.render(`resources/resource`, { itemType: item.data.type.toLowerCase(), item: item.data, app, vertexName: req.params.vertex, rawJSON: syntaxHighlight(JSON.stringify(item, undefined, 4)) })
}))

module.exports = router