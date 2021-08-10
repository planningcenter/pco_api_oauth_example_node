class Resource {
  constructor({ app, path, actions }) {
    this.app = app
    this.path = path
    this.actions = actions
    this.appPath = app.appPath
  }

  getClient() {
    return this.app.getClient()
  }

  async get(id, params = {}) {
    return await this.getClient().get(`${this.appPath}${this.path}/${id}`)
  }

  async list(params = {}) {
    return await this.getClient().get(`${this.appPath}${this.path}`)
  }

  async create(body, params = {}) {
    return await this.getClient().post(`${this.appPath}${this.path}`, {
      body: JSON.stringify(body),
    })
  }

  async update(id, body, params = {}) {
    return await this.client.patch(`${this.appPath}${this.path}/${id}`, {
      body: JSON.stringify(body),
    })
  }
}

module.exports = Resource
