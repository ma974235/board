'use strict';

const Controller = require('egg').Controller;

class SshController extends Controller {
  async echo() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = SshController;
