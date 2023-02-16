const axios = require('axios')
const { YIFENGCHUANHUA_CODE } = require('../ENV.js')
const SUCCESS_CODE = 200

const yifengchuanhua = async ({ head = '', body = '' } = {}) => {
  try {
    await axios
      .post('http://www.phprm.com/services/push/trigger/'+YIFENGCHUANHUA_CODE, {
          head,
          body,
      })
      .then(response => {
        if (response?.data?.code !== SUCCESS_CODE) {
          throw new Error(response?.data?.message)
        }
      })
  } catch (error) {
    console.log(error.stack)
  }
}

module.exports = yifengchuanhua