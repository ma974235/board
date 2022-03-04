'use strict';

const Controller = require('egg').Controller;

class BoardController extends Controller {
    //新增
  async create(){
    const ctx = this.ctx;
    let {name,content} =  await ctx.request.body; //獲取post
    const plus = await ctx.service.board.create({name,content},'Board');
    ctx.redirect('/')
  }
    //讀取
  async read() {
    const { ctx, service } = this;
    let result = await service.board.read('Board')
    await ctx.render('board.ejs',{
    text:result
    }); 
  }
    //修改
  async update(){
    const ctx = this.ctx;
    let id = await ctx.request.body.id;
    let name = await ctx.request.body.name;
    let content =  await ctx.request.body.content; //獲取post
    await ctx.service.board.update(id,name,content,'Board');
    ctx.redirect('/')
  }
    //刪除
  async destroy(){
    const ctx = this.ctx;
    let id=  ctx.params.id; //獲取get
    await ctx.service.board.destroy(id,'Board');
    ctx.redirect('/')
  }
    
}

module.exports = BoardController;
