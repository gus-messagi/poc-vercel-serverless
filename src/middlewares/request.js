const allowedMethods = ['get', 'post', 'put', 'delete']
const request = {}

allowedMethods.forEach(method => {
  request[method] = (handler, validator) => {
    const callback = (req, res) => {
      const requestMethod = req.method.toLowerCase()

      if (!allowedMethods.includes(requestMethod)) {
        return res.status(405).json({ message: 'Method not allowed' })
      }

      if (requestMethod !== method) {
        return res.status(404).json({ message: 'Not found' })
      }

      return validator.isValid(req.body) && handler(req, res)
    }

    return callback
  }
})

module.exports = request
