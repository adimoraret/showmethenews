import PubSub from '@google-cloud/pubsub'

export default class NewsPubSub {

  constructor() {
    this._topic = PubSub().topic(process.env.PUBSUB_NEWS_TOPIC)
  }

  publish(message, errorCallback, successCallback) {
    const publisher = this._topic.publisher()
    publisher.publish(Buffer.from(message), err =>
      err ? errorCallback(err) : successCallback()
    )
  }
}