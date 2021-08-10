const Resource = require('./resource')

class App {
  constructor(app) {
    this.client = app.client
    this.appPath = app.appPath

    app.resources.map((resource) => {
      let key = Object.keys(resource)[0]
      this[key] = new Resource({ app: this, ...resource[key] })
    })
  }

  getClient() {
    return this.client
  }
}

module.exports = App
