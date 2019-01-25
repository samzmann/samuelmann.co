exports.callApi = () => {
  return new Promise((resolve, reject) => {
    fetch('/api')
      .then(res => res.json())
      .then(resJson => {
        resolve(resJson)
      })
      .catch(err => {
        reject(err)
      })
  })
}
