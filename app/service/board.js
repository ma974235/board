'use strict';

const Service = require('egg').Service;

class BoardService extends Service {
    async create(name,content){

        const add = await this.app.mysql.insert('messages',{
            'name':name,
            'content':content
        });
    }

    async read(modelName) {
        const { ctx, app } = this
        return await ctx.model[modelName].findAll()
      }
    async update(id,name,content){
        for (let i = 0; i< id.length; i++) {
        let row={
            'id':id[i],
            'name':name[i],
            'content':content[i]
        };
        const update = await this.app.mysql.update('messages',row)
    }
    }  
    async destroy(id){
        const del = await this.app.mysql.delete('messages',
        {id:id})
    }
   
   
}

module.exports = BoardService;
