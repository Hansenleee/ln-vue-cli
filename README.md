# ln-vue-cli
自己摸索构建的vue架手架，技术栈(环境搭建为主，不含业务模块)为

* vue
* webpack(包括各种plugin和基于webpack的插件)
* koa
* eslint
* babel
* koa2-connect-history-api-fallback(解决history下的路由)

# 目录结构说明

```
├── build                    // 包含webpack，打包等相关信息
│   ├── webpack              // webpack配置文件
│   ├── build.js             // 打包入口
|   ├── vue-loader.conf.js   // vue-loader配置
├── config                   // 统一配置信息
│   ├── index.js             // 配置信息入口，全局统一信息
│   ├── postcss.conf.js      // postcss的配置信息
├── dist                     // 打包后的文件夹
├── mock                     // 模拟数据
├── node_modules             // 依赖
├── server                   // 服务端控制，包含koa启动配等
├── src                      // 业务代码
│   ├── assets               // 样式和图片
│   ├── ......               // vue和业务的一些文件夹
├── .babelrc                 // babel配置文件
├── .eslintignore            // eslint忽略配置
├── .eslintrc.js             // eslint校验规则
├── .gitignore               // git忽略配置
├── index.html               // 单页应用的入口html
├── package.json             // 依赖的配置信息
```

# 命令说明
## 本地启动开发
```
  npm run dev
```
## 打包配置
```
  npm run build
```

参考资源
- [webpack](https://doc.webpack-china.org/concepts/)
- [vue](https://cn.vuejs.org/v2/guide/)
- [vue-loader](https://github.com/vuejs/vue-loader)
- [eslint](http://eslint.cn/docs/rules/)
- [babel](http://babeljs.io/)
- [koa](http://koajs.com/#application)
- [axios](https://www.axios.coml)
