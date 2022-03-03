'use strict';

module.exports = app => {
    const { STRING, INTEGER, TEXT } = app.Sequelize;
  
    const Board = app.model.define('messages', {
      id: { type: INTEGER, primaryKey: true, },
      name: STRING(50),
      content:TEXT,
    },{
      timestamps: false, //自动增加创建时间
        tableName: 'messages' //设置表名称
    });
  
    return Board;
  };