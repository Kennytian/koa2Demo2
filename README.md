# Koa2 学习项目

新建项目，初始化npm，然后准备koa的安装和初始化：

```$ yarn add koa```

为了能够顺畅的使用我们心爱的ES6语法，需要安装一下 babel-preset-env
```
$ yarn add --dev babel-preset-env babel-plugin-transform-runtime
```

顺便在根目录建立 .babelrc 文件：
```
{
  "presets": ["env"],
  "plugins": ["transform-runtime"]
}
```

## 运行koa
```$ yarn add nodemon```

```$ yarn start```

## 自动化测试
```
$ yarn add --dev jest
```

具体配置请见package.json里的`jest`

```
$ yarn test
```
