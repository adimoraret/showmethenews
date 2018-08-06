import Storage from '@google-cloud/storage'
import { Readable } from 'stream'

export default class CloudStorage {
  constructor(bucketName) {
    const storage = new Storage({ projectId: process.env.NewsProjectId })
    this._bucketName = bucketName
    this._bucket = storage.bucket(bucketName)
  }

  _createReadableStream(content) {
    var rStream = new Readable
    rStream.push(content)
    rStream.push(null)
    return rStream
  }

  uploadFile(filePath, fileContent, errorCallBack, successCallBack) {
    const file = this._bucket.file(filePath)
    this._createReadableStream(fileContent)
      .pipe(file.createWriteStream())
      .on('error', err => errorCallBack(err))
      .on('finish', successCallBack)
  }

}