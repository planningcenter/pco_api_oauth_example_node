class PCOError extends Error {
  constructor(baseError = {}) {
    super(baseError.message)

    this.headers = baseError.headers;
    this.status = baseError.status;
    this.statusText = baseError.statusText;
    this.message = baseError.message;
  }

  static generate(baseError) {
    try {
      switch (baseError.status) {
        case 400:
          return new PCOBadRequestError(baseError)
        case 404:
          return new PCONotFoundError(baseError)
        default:
          return new PCOError(baseError)
      }
    } catch (err) {
      console.log(err)
    }
  }
}

class PCOBadRequestError extends PCOError { }
class PCONotFoundError extends PCOError { }

module.exports.PCOError = PCOError;
module.exports.PCOBadRequestError = PCOBadRequestError;
module.exports.PCONotFoundError = PCONotFoundError;