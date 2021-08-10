const App = require('./app')
const schema = require('./schema')
const fetch = require('node-fetch')
const { PCOError } = require('./error')

class PCO {
  constructor(options = {}) {
    let clientOptions = { ...defaultOptions, ...options }

    this.token = clientOptions.oauthAccessToken
    this.baseURL = clientOptions.baseURL
    this.options = clientOptions

    Object.keys(schema).map((app) => {
      this[app] = new App({
        client: this,
        baseURL: clientOptions.baseURL,
        ...clientOptions,
        ...schema[app],
      })
    })
  }

  configure(options = {}) {
    Object.assign(this, options)
  }

  async request(path, options) {
    return await fetch(`${this.baseURL}${path}`, {
      ...options,
      headers: {
        Accept: 'application/javascript',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    })
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json()
        } else {
          throw PCOError.generate(res)
        }
      })
      .catch((error) => {
        throw PCOError.generate(error)
      })
  }

  async get(path, options) {
    return await this.request(path, { ...options, method: 'GET' })
  }

  async post(path, options) {
    return await this.request(path, { ...options, method: 'POST' })
  }

  async patch(path, options) {
    return await this.request(path, { ...options, method: 'PATCH' })
  }

  async delete(path, options) {
    return await this.request(path, { ...options, method: 'DELETE' })
  }
}

const defaultOptions = { baseURL: 'https://api.planningcenteronline.com' }

class PCOApi {
  constructor() {
    throw new Error('Use PCOApi.getClient()')
  }

  static getClient() {
    if (!PCOApi.instance) {
      PCOApi.instance = new PCO()
    }
    return PCOApi.instance
  }

  static configureClient(options) {
    if (!PCOApi.instance) {
      PCOApi.instance = new PCO(options)
    } else {
      PCOApi.instance.configure(options)
    }
    return PCOApi.instance
  }
}

module.exports = PCOApi
