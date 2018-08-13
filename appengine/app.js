console.log('In app.js writing message')

const express = require('express')
const PubSub = require('@google-cloud/pubsub')
const pubsub = PubSub()
const topic = pubsub.topic(process.env.PUBSUB_TOPIC)
const publisher = topic.publisher()

const app = express();

app.get('/news/:source/:category/:section', (req, res) => {
  const { source, category, section } = req.params
  if (!valid(req, source, category, section)) {
    console.log(`Invalid source: ${source} or category: ${category} or section: ${section}`)
    res.status(400).send(`Invalid request`)
    return
  }
  const message = { source: source, category: category, section: section }
  publish(res, JSON.stringify(message))
  console.log(`Message published for source: ${source} category: ${category} section: ${section}`)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`App statred and listening on port ${PORT}`);
});

module.exports = app;

function publish(res, message) {
  publisher.publish(Buffer.from(message), (err) => {
    if (err) {
      console.log(`Got error publishing message: ${JSON.stringify(err)}`)
      res.status(400).send(`Got error: ${JSON.stringify(err)}`);
      return;
    }
    res.status(200).send(`Success: Message ${JSON.stringify(message)} sent.`);
  });
}

function valid(req, source, category, section) {
  if (req.get('X-AppEngine-Cron') === 'true') {
    return true
  }
  return false
}