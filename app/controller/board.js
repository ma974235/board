'use strict';

const Controller = require('egg').Controller;

class BoardController extends Controller {

    async create(){
        const ctx = this.ctx;

        let {name,content}  = ctx.request.body; //獲取post
         const plus = await ctx.service.board.create({name,content},'Board');
         ctx.redirect('/')
                              
         
    }

    async read() {
        const { ctx, service } = this;
        let result = await service.board.read('Board')
        await ctx.render('board.ejs',{
            text:result
        }); 
    }
    
    

    
    async update(){
       const ctx = this.ctx;
       let id =  await ctx.request.body.id; //獲取post
       let name =  await ctx.request.body.name; //獲取post
       let content =  await ctx.request.body.content; //獲取post
       let update = await ctx.service.board.update(id,name,content);
       ctx.redirect('/')

     }
     async destroy(){
        const ctx = this.ctx;
        let id=  ctx.params.id; //獲取get
        let destroy = await ctx.service.board.destroy(id);
        ctx.redirect('/')
    }
 
     
}

module.exports = BoardController;
