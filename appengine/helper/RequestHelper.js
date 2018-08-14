function isValid(req) {
  return req.get('X-AppEngine-Cron') === 'true'
}

function extractMessage(req) {
  const { source, category, section } = req.params
  const message = { source: source, category: category, section: section }
  return JSON.stringify(message)
}

module.exports = {
  isValid: isValid,
  extractMessage: extractMessage
}