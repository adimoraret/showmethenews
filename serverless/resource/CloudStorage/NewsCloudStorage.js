import CloudStorage from "./CloudStorage"

export default class NewsCloudStorage {
  constructor(errorCallBack, successCallBack) {
    this._bucketName = process.env.NewsBucketName
    this._errorCallBack = errorCallBack
    this._successCallBack = successCallBack
  }

  uploadNewsFile(source, category, section, content) {
    var cloudStorage = new CloudStorage(this._bucketName)
    const mainFolder = "resources/news"
    const fileName = "snapshot.json"
    const path = `${mainFolder}/${source}/${category}/${section}/${fileName}`

    cloudStorage.uploadFile(path, JSON.stringify(content), this._errorCallBack, this._successCallBack)
  }
}