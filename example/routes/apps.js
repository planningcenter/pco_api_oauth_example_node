const express = require('express')
const router = express.Router()
const schema = require('../../lib/schema')

const asycErrors = (fn) => (req, res, next) => {
  const routePromise = fn(req, res, next)
  if (routePromise.catch) {
    routePromise.catch((err) => {
      console.log(err)
      res.render('errors', { err })
    })
  }
}

router.get(
  '/apps',
  asycErrors(async (req, res) => {
    res.render('apps', { apps: Object.keys(schema) })
  }),
)

router.get(
  '/:app',
  asycErrors(async (req, res) => {
    const app = req.params.app.replace(/^\w/, (c) => c.toUpperCase())
    res.render('app', {
      app,
      appPath: schema[app].appPath,
      vertices: schema[app].resources,
    })
  }),
)

module.exports = router
