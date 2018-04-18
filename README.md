## Install & Basical

新建项目，初始化npm，然后准备koa的安装和初始化：

```$ npm install koa@next --save```

## 运行koa
```$ npm install nodemon --save```

为了能够顺畅的使用我们心爱的ES6语法，需要安装一下polyfill
```
$ npm install babel-register babel-plugin-transform-async-to-generator --save
$ npm install babel-polyfill --save-dev
$ npm install babel-preset-es2015 --save-dev
$ npm install babel-preset-stage-3 --save-dev
```

顺便在根目录建立.babelrc文件：
```
{
  "presets": [
    "es2015",
    "stage-3"
  ]
}
```
