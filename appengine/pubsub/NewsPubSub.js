const PubSub = require('@google-cloud/pubsub')
const pubsub = PubSub()
const topic = pubsub.topic(process.env.PUBSUB_TOPIC)

function publish(message, errorCallback, successCallback) {
  const publisher = topic.publisher()
  publisher.publish(Buffer.from(message), err =>
    err ? errorCallback(err) : successCallback()
  )
}

module.exports = {
  publish: publish
}