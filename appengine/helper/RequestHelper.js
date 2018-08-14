export default class RequestHelper {
  constructor(req) {
    this._req = req;
  }

  isValid() {
    return this._req.get('X-AppEngine-Cron') === 'true'
  }

  extractMessage() {
    const { source, category, section } = this._req.params
    const message = { source: source, category: category, section: section }
    return JSON.stringify(message)
  }

}