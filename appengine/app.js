console.log('In app.js writing message')

const express = require('express');
const PubSub = require('@google-cloud/pubsub');
const pubsub = PubSub();
const topic = pubsub.topic(process.env.PUBSUB_TOPIC);
const publisher = topic.publisher();

const app = express();
app.get('/news/:category/:section', (req, res) => {
  const { category, section } = req.params
  if (!valid(category, section)) {
    res.status(400).send(`Invalid category: ${category} & section: ${section}`);
  }

  publish()
});

function publish() {

}