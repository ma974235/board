'use strict';

const Service = require('egg').Service;

class BoardService extends Service {
    
    async create(data,modelName){

        const  ctx  = this.ctx
        await ctx.model[modelName].create(data);
     

    }

    async read(modelName) {

        const ctx = this.ctx
        return await ctx.model[modelName].findAll()

    }

    async update(id,name,content,modelName){

        for (let i = 0; i< id.length; i++) {

            let row={

                'name':name[i],
                'content':content[i]

            };

        await this.ctx.model[modelName].update(row,{where:{'id':id[i]}})

        }
    
    }  
    async destroy(id,modelName){

        const ctx = this.ctx
        const result = await ctx.model[modelName].findByPk(id);
        await result.destroy();

    }
      
}

module.exports = BoardService;
