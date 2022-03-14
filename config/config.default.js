'use strict'

module.exports = appInfo => {

  const config = exports = { }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1645422226593_2394'
  exports.ipHeaders = 'X-Real-Ip, X-Forwarded-For';
  const userConfig = {
    // myAppName: 'egg', 
  }
  exports.view = {
    defaultViewEngine: 'nunjucks', 
    mapping: {
      '.ejs': 'ejs', 
    }, 
  }

  exports.sequelize = {
    // 資料庫類型
    dialect: 'mysql', 
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
  }
  config.security = {
    csrf: {
      enable: false, 
      ignoreJSON: true
    },   
  }
  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: '',
      db: 0
    }
  }
  config.cors = {
    origin: '*', 
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH'
  }
  config.proxy = true;
  config.httpproxy = {
    '/api': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
          '^/api': '/'  }
      }
    }
  config.cluster = {
    listen: {
      port: 7001,
      hostname: '0.0.0.0', 
    },
  };
  return {
    ...config, 
    ...userConfig, 
  }
}
