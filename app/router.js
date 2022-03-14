'use strict'
const boardRouter = require('./router/board')
const bankRouter = require('./router/bank')
module.exports = app => {
  boardRouter(app)
  bankRouter(app)
}
