import express from 'express'
import NewsPubSub from './pubsub/NewsPubSub'
import RequestHelper from './helper/RequestHelper'

const app = express();
const newsPubSub = new NewsPubSub()

app.get('/news/:source/:category/:section', (req, res) => {
  const requestHelper = new RequestHelper(req)
  if (!requestHelper.isValid()) {
    console.log(`Invalid request. Path: ${req.path}`)
    res.status(400).send(`Invalid request`)
    return
  }

  const message = requestHelper.extractMessage()
  newsPubSub.publish(message,
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

export default app