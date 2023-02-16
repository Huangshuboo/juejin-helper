const axios = require('axios')
const { YIFENGCHUANHUA_CODE } = require('../ENV.js')
const SUCCESS_CODE = 0

const yifengchuanhua = async ({ head = '', body = '' } = {}) => {
  console.log("head:"+head)
  console.log("body:"+body)
  try {
    await axios
      .post('http://www.phprm.com/services/push/trigger/'+YIFENGCHUANHUA_CODE, {
          head: head,
          body: body,
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