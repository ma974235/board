/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1645422226593_2394';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  exports.view = {
    defaultViewEngine:'nunjucks',
    mapping: {
      '.ejs': 'ejs',
    },
  };

  exports.sequelize = {
      // 資料庫類型
      dialect:'mysql',
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'ma974232',
      // 資料庫名
      database: 'board',
    };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },  };
  
  config.cors = {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  return {
    ...config,
    ...userConfig,
  };
};
