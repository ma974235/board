'use strict';

const Service = require('egg').Service;

class BoardService extends Service {
    //新增
    async create(data,modelName){

        const  ctx  = this.ctx
        await ctx.model[modelName].create(data);
     

    }
    //讀取
    async read(modelName) {

        const ctx = this.ctx
        return await ctx.model[modelName].findAll()

    }
    //修改
    async update(id,name,content,modelName){

        for (let i = 0; i< id.length; i++) {

            let row={

                'name':name[i],
                'content':content[i]

            };

        await this.ctx.model[modelName].update(row,{where:{'id':id[i]}})

        }
    
    } 
    //刪除
    async destroy(id,modelName){

        const ctx = this.ctx
        const result = await ctx.model[modelName].findByPk(id);
        await result.destroy();

    }
      
}

module.exports = BoardService;
