# vue-router-learn
```
vue-router学习
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```


### vue 审查项目的 webpack 配置
[官网地址](https://cli.vuejs.org/zh/guide/webpack.html#%E4%BF%AE%E6%94%B9%E6%8F%92%E4%BB%B6%E9%80%89%E9%A1%B9)

```
vue inspect > output.js
```

### vue源码调试
```
1. output.js

resolve: {
    alias: {
      '@': '/Users/wangjianqing/Desktop/project/vue/vue-router-learn/src',
      vue$: 'vue/dist/vue.runtime.esm.js' 
    },
}

2. 在node_module中找到 vue/dist/vue.runtime.esm.js

```