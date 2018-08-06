import { Storage } from '@google-cloud/storage'

export default class CloudStorage {
  constructor(bucketName) {
    //this._storage = new Storage({ projectId: process.env.projectId })
    this._bucketName = bucketName
    this._bucket = Storage.bucket(bucketName)
  }

  uploadFile(fileName, filePath, fileContent) {
    const path = `gs://${this._bucketName}/${filePath}/${fileName}`
    var file = this._bucket.file('my-file');
  }

}