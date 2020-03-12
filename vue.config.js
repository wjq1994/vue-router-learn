const path = require('path');

module.exports = {
    configureWebpack: {
        resolve:{ // 更改解析模块的查找方式
            modules:[path.resolve(__dirname, "source"),path.resolve('node_modules')]
        }
    }
}