console.log('In app.js writing message')

const express = require('express')
const { publish } = require('./pubsub/NewsPubSub.js')
const { isValid, extractMessage } = require('./helper/RequestHelper')

const app = express();

app.get('/news/:source/:category/:section', (req, res) => {

  if (!isValid(req)) {
    console.log(`Invalid request. Path: ${req.path}`)
    res.status(400).send(`Invalid request`)
    return
  }

  const message = extractMessage(req)
  publish(message,
    (err) => {
      console.log(`Gor error while publishing ${message}: ${err}`)
      res.status(400).send('Gor error while publishing. Check the logs.')
    },
    () => {
      console.log(`Successfully published ${message}`)
      res.status(200).send(`Successfully published.`)
    }
  )
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`App statred and listening on port ${PORT}`)
})

module.exports = app