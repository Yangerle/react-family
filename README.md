# 从零搭建React全家桶框架教程

* [从零搭建React全家桶框架教程](#%E4%BB%8E%E9%9B%B6%E6%90%AD%E5%BB%BAreact%E5%85%A8%E5%AE%B6%E6%A1%B6%E6%A1%86%E6%9E%B6%E6%95%99%E7%A8%8B)
  * [创建日期：2019\.3\.12](#%E5%88%9B%E5%BB%BA%E6%97%A5%E6%9C%9F2019312)
  * [修改日期：2019\.3\.15](#%E4%BF%AE%E6%94%B9%E6%97%A5%E6%9C%9F2019315)
  * [source](#source)
  * [写在前面](#%E5%86%99%E5%9C%A8%E5%89%8D%E9%9D%A2)
  * [说明](#%E8%AF%B4%E6%98%8E)
    * [技术栈](#%E6%8A%80%E6%9C%AF%E6%A0%88)
    * [目录说明](#%E7%9B%AE%E5%BD%95%E8%AF%B4%E6%98%8E)
  * [init项目](#init%E9%A1%B9%E7%9B%AE)
  * [babel](#babel)
  * [路由启动是需要配置服务器的、](#%E8%B7%AF%E7%94%B1%E5%90%AF%E5%8A%A8%E6%98%AF%E9%9C%80%E8%A6%81%E9%85%8D%E7%BD%AE%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9A%84)
    * [服务器类型](#%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%B1%BB%E5%9E%8B)
    * [webpack\-dev\-server配置选项](#webpack-dev-server%E9%85%8D%E7%BD%AE%E9%80%89%E9%A1%B9)
  * [模块热替换](#%E6%A8%A1%E5%9D%97%E7%83%AD%E6%9B%BF%E6%8D%A2)
  * [redux](#redux)
  * [编译CSS](#%E7%BC%96%E8%AF%91css)
  * [编译图片](#%E7%BC%96%E8%AF%91%E5%9B%BE%E7%89%87)
  * [按需加载](#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD)
  * [缓存](#%E7%BC%93%E5%AD%98)
  * [提取公共代码](#%E6%8F%90%E5%8F%96%E5%85%AC%E5%85%B1%E4%BB%A3%E7%A0%81)
  * [生产环境构建](#%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E6%9E%84%E5%BB%BA)
  * [文件压缩](#%E6%96%87%E4%BB%B6%E5%8E%8B%E7%BC%A9)
  * [指定环境](#%E6%8C%87%E5%AE%9A%E7%8E%AF%E5%A2%83)
  * [优化缓存](#%E4%BC%98%E5%8C%96%E7%BC%93%E5%AD%98)
  * [public path](#public-path)
  * [打包优化](#%E6%89%93%E5%8C%85%E4%BC%98%E5%8C%96)
  * [抽取css](#%E6%8A%BD%E5%8F%96css)
  * [使用axios和middleware优化API请求](#%E4%BD%BF%E7%94%A8axios%E5%92%8Cmiddleware%E4%BC%98%E5%8C%96api%E8%AF%B7%E6%B1%82)
  * [调整文本编辑器,实现自动编译](#%E8%B0%83%E6%95%B4%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91%E5%99%A8%E5%AE%9E%E7%8E%B0%E8%87%AA%E5%8A%A8%E7%BC%96%E8%AF%91)
  * [合并提取webpack公共配置](#%E5%90%88%E5%B9%B6%E6%8F%90%E5%8F%96webpack%E5%85%AC%E5%85%B1%E9%85%8D%E7%BD%AE)
  * [优化目录结构并增加404页面](#%E4%BC%98%E5%8C%96%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E5%B9%B6%E5%A2%9E%E5%8A%A0404%E9%A1%B5%E9%9D%A2)
  * [加入 babel\-plugin\-transform\-runtime 和 babel\-polyfill](#%E5%8A%A0%E5%85%A5-babel-plugin-transform-runtime-%E5%92%8C-babel-polyfill)
  * [集成PostCSS](#%E9%9B%86%E6%88%90postcss)
  * [redux 模块热替换配置](#redux-%E6%A8%A1%E5%9D%97%E7%83%AD%E6%9B%BF%E6%8D%A2%E9%85%8D%E7%BD%AE)
  * [模拟AJAX数据之Mock\.js](#%E6%A8%A1%E6%8B%9Fajax%E6%95%B0%E6%8D%AE%E4%B9%8Bmockjs)
  * [使用 CSS Modules](#%E4%BD%BF%E7%94%A8-css-modules)
  * [使用 json\-server 代替 Mock\.js](#%E4%BD%BF%E7%94%A8-json-server-%E4%BB%A3%E6%9B%BF-mockjs)
  * [快速生成Github README\.md的目录](#%E5%BF%AB%E9%80%9F%E7%94%9F%E6%88%90github-readmemd%E7%9A%84%E7%9B%AE%E5%BD%95)
    * [Github\+百度搜索结果](#github%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C)
    * [解决方案：gh\-md\-toc](#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88gh-md-toc)



## 创建日期：2019.3.12

## 修改日期：2019.3.15



## source 

* [Babel的使用](https://segmentfault.com/a/1190000008159877)
* [Babel 入门教程](http://www.ruanyifeng.com/blog/2016/01/babel.html)
* [npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
* [初探 React Router 4.0](https://www.jianshu.com/p/e3adc9b5f75c)
* [webpack-dev-server使用方法，看完还不会的来找我~](https://segmentfault.com/a/1190000006670084)
* [Using webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server)
* [Document React Hot Loader 3](https://github.com/gaearon/react-hot-loader/issues/243)
* [Redux 入门教程（一）：基本用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)
* [Redux中文文档](http://cn.redux.js.org/index.html)
* [redux的数据流](http://cn.redux.js.org/docs/basics/DataFlow.html)
* [React 实践心得：react-redux 之 connect 方法详解](http://taobaofed.org/blog/2016/08/18/react-redux-connect/)
* [异步 Action](http://cn.redux.js.org/docs/advanced/AsyncActions.html)
* [Middleware](http://cn.redux.js.org/docs/advanced/Middleware.html)
* [devtool](https://webpack.docschina.org/configuration/devtool)
* 按需加载
  * <http://www.jianshu.com/p/8dd98a7028e0>
  * <https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/code-splitting.md>
  * <https://segmentfault.com/a/1190000007949841>
  * <http://react-china.org/t/webpack-react-router/10123>
  * <https://juejin.im/post/58f9717e44d9040069d06cd6>
* babel-plugin-transform-runtime 和 babel-polyfill
  * <http://www.ruanyifeng.com/blog/2016/01/babel.html>
  * [lmk123/blog#45](https://github.com/lmk123/blog/issues/45)
  * <https://github.com/thejameskyle/babel-handbook/blob/master/translations/zh-Hans/README.md>
* Mock.js
  * <http://www.jianshu.com/p/dd23a6547114>
  * <https://segmentfault.com/a/1190000005793320>
* [CSS Modules 用法教程](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)

## 写在前面

> 交流加QQ群【572071150】备注【前端】

源码地址：<https://github.com/brickspert/react-family>
提问反馈：[blog](https://github.com/brickspert/blog/issues/1)

因为本教程写于2017年9月，然而前端技术发展太快了。有些库的版本一直在升级，所以你如果碰到奇怪的问题，请先检查下安装的库版本是否和我源码中的一样。please~

大家阅读的时候，照着目录来阅读哦，有些章节不在文章里面。要点链接的~

当我第一次跟着项目做`react`项目的时候，由于半截加入的，对框架了解甚少，只能跟着别人的样板写。对整个框架没有一点了解。

做项目，总是要解决各种问题的，所以每个地方都需要去了解，但是对整个框架没有一个整体的了解，实在是不行。

期间，我也跟着别人的搭建框架的教程一步一步的走，但是经常因为自己太菜，走不下去。在经过各种蹂躏之后，对整个框架也有一个大概的了解，
我就想把他写下来，让后来的菜鸟能跟着我的教程对`react`全家桶有一个全面的认识。

我的这个教程，从新建根文件夹开始，到成型的框架，每个文件为什么要建立？建立了干什么？每个依赖都是干什么的？一步一步写下来，供大家学习。

当然，这个框架我以后会一直维护的，**也希望大家能一起来完善这个框架**，如果您有任何建议，欢迎在这里留言，欢迎`fork`源码[react-family](https://github.com/brickspert/react-family)。

我基于该框架`react-family`又做了一个兼容IE8的版本，教程在这里[react-family框架兼容IE8教程](https://github.com/brickspert/blog/issues/5)。

## 说明

### 技术栈

技术栈均是目前最新的。

- react 15.6.1

- react-dom 15.6.1(必须与react版本号对应，不然会出现下方报错)

  ```bash
  Uncaught TypeError: Cannot read property 'hasOwnProperty' of undefined
  ```

- react-router-dom 4.2.2

- redux 3.7.2

- webpack 3.5.5

- react-hot-loader v3

- react-redux 5.1.1(否则报错如下)

  ```bash
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext is not a function
  ```

- uglifyjs-webpack-plugin@1(否则报错如下)

  ```bash
  TypeError: Cannot read property 'compilation' of undefined
  ```

- clean-webpack-plugin@1(否则报错如下)

  ```bash
  clean-webpack-plugin only accepts an options object.
  ```

- css-loader@0

  ```bash
  Module build failed: TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be a string
  ```

  

### 目录说明

``` makefile
│  .babelrc                          #babel配置文件
│  package-lock.json
│  package.json
│  README.MD
│  webpack.config.js                 #webpack生产配置文件
│  webpack.dev.config.js             #webpack开发配置文件
│  
├─dist
├─public                             #公共资源文件
└─src                                #项目源码
    │  index.html                    #index.html模板
    │  index.js                      #入口文件
    │  
    ├─component                      #组建库
    │  └─Hello
    │          Hello.js
    │          
    ├─pages                          #页面目录
    │  ├─Counter
    │  │      Counter.js
    │  │      
    │  ├─Home
    │  │      Home.js
    │  │      
    │  ├─Page1
    │  │  │  Page1.css                #页面样式
    │  │  │  Page1.js
    │  │  │  
    │  │  └─images                    #页面图片
    │  │          brickpsert.jpg
    │  │          
    │  └─UserInfo
    │          UserInfo.js
    │          
    ├─redux
    │  │  reducers.js
    │  │  store.js
    │  │  
    │  ├─actions
    │  │      counter.js
    │  │      userInfo.js
    │  │      
    │  ├─middleware
    │  │      promiseMiddleware.js
    │  │      
    │  └─reducers
    │          counter.js
    │          userInfo.js
    │          
    └─router                        #路由文件
            Bundle.js
            router.js
```

## init项目

1. 创建文件夹并进入

   `mkdir react-family && cd react-family`

2. init npm

   `npm init` 按照提示填写项目基本信息

   

## babel

> Babel 把用最新标准编写的 JavaScript 代码向下编译成可以在今天随处可用的版本。 这一过程叫做“源码到源码”编译， 也被称为转换编译。

通俗的说，就是我们可以用ES6, ES7等来编写代码，Babel会把他们统统转为ES5。

- [babel-core](https://github.com/babel/babel/tree/master/packages/babel-core) 调用Babel的API进行转码
- [babel-loader](https://github.com/babel/babel-loader) babel装载器，针对不同的打包工具开发的启动装置
- [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015) 用于解析 ES6
- [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react) 用于解析 JSX
- [babel-preset-stage-0](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-0) 用于解析 ES7 提案

## 路由启动是需要配置服务器的、

### 服务器类型

1. `Nginx`, `Apache`, `IIS`等配置启动一个简单的的WEB服务器。
2. 使用`webpack-dev-server`来配置启动WEB服务器。

### webpack-dev-server配置选项

既然用到了`webpack-dev-server`，我们就看看[它的其他的配置项](https://doc.webpack-china.org/configuration/dev-server)。
看了之后，发现有几个我们可以用的。

- color（CLI only） `console`中打印彩色日志

- historyApiFallback 任意的`404`响应都被替代为`index.html`。有什么用呢？你现在运行
  `npm start`，然后打开浏览器，访问`http://localhost:8080`,然后点击`Page1`到链接`http://localhost:8080/page1`，
  然后刷新页面试试。是不是发现刷新后`404`了。为什么？`dist`文件夹里面并没有`page1.html`,当然会`404`了，所以我们需要配置
  `historyApiFallback`，让所有的`404`定位到`index.html`。

- host 指定一个`host`,默认是`localhost`。如果你希望服务器外部可以访问，指定如下：`host: "0.0.0.0"`。比如你用手机通过IP访问。

- hot 启用`Webpack`的模块热替换特性。关于热模块替换，我下一小节专门讲解一下。

- port 配置要监听的端口。默认就是我们现在使用的`8080`端口。

- proxy 代理。比如在 `localhost:3000` 上有后端服务的话，你可以这样启用代理：

  ```javascript
      proxy: {
        "/api": "http://localhost:3000"
      }
  ```

* progress（CLI only） 将编译进度输出到控制台。

## 模块热替换

`HRM`配置其实有两种方式，一种`CLI`方式，一种`Node.js API`方式。我们用到的就是`CLI`方式，比较简单。
`Node.js API`方式，就是建一个`server.js`等等，网上大部分教程都是这种方式，这里不做讲解了。

我们看下[webpack模块热替换](https://doc.webpack-china.org/guides/hot-module-replacement)教程。

我们接下来要这么修改

```bash
package.json` 增加 `--hot
"start": "webpack-dev-server --config webpack.dev.config.js --color --progress --hot"
```

`src/index.js` 增加`module.hot.accept()`,如下。当模块更新的时候，通知`index.js`。

```javascript
src/index.js
import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/router';

if (module.hot) {
    module.hot.accept();
}

ReactDom.render(
    getRouter(), document.getElementById('app'));
```

现在我们执行`npm start`，打开浏览器，修改`Home.js`,看是不是不刷新页面的情况下，内容更新了？惊不惊喜？意不意外？

**做模块热替换，我们只改了几行代码，非常简单的。纸老虎一个~**

现在我需要说明下我们命令行使用的`--hot`，可以通过配置`webpack.dev.config.js`来替换，
向文档上那样,修改下面三处。但我们还是用`--hot`吧。下面的方式我们知道一下就行，我们不用。同样的效果。

```javascript
const webpack = require('webpack');

devServer: {
    hot: true
}

plugins:[
     new webpack.HotModuleReplacementPlugin()
]
```

你以为模块热替换到这里就结束了？no~~no~~no~

上面的配置对`react`模块的支持不是很好哦。

例如下面的`demo`，当模块热替换的时候，`state`会重置，这不是我们想要的。

为了在`react`模块更新的同时，能保留`state`等页面中其他状态，我们需要引入[react-hot-loader](https://github.com/gaearon/react-hot-loader)~

Q:　请问`webpack-dev-server`与`react-hot-loader`两者的热替换有什么区别？

A: 区别在于`webpack-dev-serve`r自己的`--hot`模式只能即时刷新页面，但状态保存不住。因为`React`有一些自己语法(JSX)是`HotModuleReplacementPlugin`搞不定的。
而`react-hot-loader`在`--hot`基础上做了额外的处理，来保证状态可以存下来。（来自[segmentfault](https://segmentfault.com/q/1010000005612845)）

## redux

思：redux的目的是应用UI和数据逻辑彻底分离，将操作抽象为action,将逻辑抽象为reducer,由store沟通协调，来改变应用的state，state具体反映就是界面的变化。

使用指定的 React Redux 组件 来 魔法般的 让所有容器组件都可以访问 store，而不必显示地传递它。只需要在渲染根组件时使用即可。

为了让`action`创建函数除了返回`action`对象外，还可以返回函数，我们需要引用`redux-thunk`。

```bash
npm install --save redux-thunk
```

`redux`提供了一个`combineReducers`函数来合并`reducer`，不用我们自己合并哦。写起来简单，但是意思和我们
自己写的`combinReducers`也是一样的。

## 编译CSS

`css-loader`使你能够使用类似`@import` 和 `url(...)`的方法实现 `require()`的功能；

`style-loader`将所有的计算后的样式加入页面中； 二者组合在一起使你能够把样式表嵌入`webpack`打包后的JS文件中。

```bash
npm install css-loader style-loader --save-dev
```

`webpack.dev.config.js` `rules`增加

```javascript
{
   test: /\.css$/,
   use: ['style-loader', 'css-loader']
}
```



## 编译图片

```bash
npm install --save-dev url-loader file-loader
```

`webpack.dev.config.js` `rules`增加

```javascript
{
    test: /\.(png|jpg|gif)$/,
    use: [{
        loader: 'url-loader',
        options: {
            limit: 8192
        }
    }]
}
```

`options limit 8192`意思是，小于等于8K的图片会被转成`base64`编码，直接插入HTML中，减少`HTTP`请求。

## 按需加载

为什么要实现按需加载？

我们现在看到，打包完后，所有页面只生成了一个`build.js`,当我们首屏加载的时候，就会很慢。因为他也下载了别的页面的`js`了哦。

如果每个页面都打包了自己单独的JS，在进入自己页面的时候才加载对应的js，那首屏加载就会快很多哦。

在 `react-router 2.0`时代， 按需加载需要用到的最关键的一个函数，就是`require.ensure()`，它是按需加载能够实现的核心。

在4.0版本，官方放弃了这种处理按需加载的方式，选择了一个更加简洁的处理方式。

[传送门](https://reacttraining.com/react-router/web/guides/code-splitting)

现在你运行发现名字变成`home.js`,这样的了。棒棒哒！

那么问题来了`home`是在哪里设置的？`webpack`怎么知道他叫`home`？

其实在这里我们定义了，`router.js`里面

```javascript
import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
```

看到没。这里有个`name=home`。嘿嘿。



## 缓存

想象一下这个场景~

我们网站上线了，用户第一次访问首页，下载了`home.js`，第二次访问又下载了`home.js`~

这肯定不行呀，所以我们一般都会做一个缓存，用户下载一次`home.js`后，第二次就不下载了。

有一天，我们更新了`home.js`，但是用户不知道呀，用户还是使用本地旧的`home.js`。出问题了~

怎么解决？每次代码更新后，打包生成的名字不一样。比如第一次叫`home.a.js`，第二次叫`home.b.js`。

文档[看这里](https://doc.webpack-china.org/guides/caching)

## 提取公共代码

想象一下，我们的主文件，原来的`bundle.js`里面是不是包含了`react`,`redux`,`react-router`等等
这些代码？？这些代码基本上不会改变的。但是，他们合并在`bundle.js`里面，每次项目发布，重新请求`bundle.js`的时候，相当于重新请求了
`react`等这些公共库。浪费了~

我们把`react`这些不会改变的公共库提取出来，用户缓存下来。从此以后，用户再也不用下载这些库了，无论是否发布项目。嘻嘻。

`webpack`文档给了教程，[看这里](https://doc.webpack-china.org/guides/caching#-extracting-boilerplate-)

但是你现在可能发现编译生成的文件`app.[hash].js`和`vendor.[hash].js`生成的`hash`一样的，这里是个问题，因为呀，你每次修改代码,都会导致`vendor.[hash].js`名字改变，那我们提取出来的意义也就没了。其实文档上写的很清楚，

```javascript
   output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js', //这里应该用chunkhash替换hash
        chunkFilename: '[name].[chunkhash].js'
    }
```

但是无奈，如果用`chunkhash`，会报错。和`webpack-dev-server --hot`不兼容，具体[看这里](https://github.com/webpack/webpack-dev-server/issues/377)。

现在我们在配置开发版配置文件，就向`webpack-dev-server`妥协，因为我们要用他。问题先放这里，等会我们配置正式版`webpack.config.js`的时候要解决这个问题。

## 生产环境构建

> 开发环境(development)和生产环境(production)的构建目标差异很大。在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server。而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。

文档[看这里](https://doc.webpack-china.org/guides/production)

## 文件压缩

`webpack`使用`UglifyJSPlugin`来压缩生成的文件。

```bash
npm i --save-dev uglifyjs-webpack-plugin
```

## 指定环境

> 许多 library 将通过与 process.env.NODE_ENV 环境变量关联，以决定 library 中应该引用哪些内容。例如，当不处于生产环境中时，某些 library 为了使调试变得容易，可能会添加额外的日志记录(log)和测试(test)。其实，当使用 process.env.NODE_ENV === 'production' 时，一些 library 可能针对具体用户的环境进行代码优化，从而删除或添加一些重要代码。我们可以使用 webpack 内置的 DefinePlugin 为所有的依赖定义这个变量：

```javascript
webpack.config.js
module.exports = {
  plugins: [
       new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify('production')
           }
       })
  ]
}
```

`npm run build`后发现`vendor.[hash].js`又变小了。

## 优化缓存

刚才我们把`[name].[hash].js`变成`[name].[chunkhash].js`后，`npm run build`后，
发现`app.xxx.js`和`vendor.xxx.js`不一样了哦。

但是现在又有一个问题了。

你随便修改代码一处，例如`Home.js`，随便改变个字，你发现`home.xxx.js`名字变化的同时，
`vendor.xxx.js`名字也变了。这不行啊。这和没拆分不是一样一样了吗？我们本意是`vendor.xxx.js`
名字永久不变，一直缓存在用户本地的。~

[官方文档](https://doc.webpack-china.org/guides/caching)推荐了一个插件[HashedModuleIdsPlugin](https://doc.webpack-china.org/plugins/hashed-module-ids-plugin)

```javascript
    plugins: [
        new webpack.HashedModuleIdsPlugin()
    ]
```

现在你打包，修改代码再试试，是不是名字不变啦？错了，现在打包，我发现名字还是变了，经过比对文档，我发现还要加一个`runtime`代码抽取，

```javascript
new webpack.optimize.CommonsChunkPlugin({
    name: 'runtime'
})
```

加上这句话就好了~为什么呢？看下[解释](https://doc.webpack-china.org/concepts/manifest)。

**注意，引入顺序在这里很重要。CommonsChunkPlugin 的 'vendor' 实例，必须在 'runtime' 实例之前引入。**



## public path

想象一个场景，我们的静态文件放在了单独的静态服务器上去了，那我们打包的时候，如何让静态文件的链接定位到静态服务器呢？

看文档[Public Path](https://doc.webpack-china.org/guides/public-path)

`webpack.config.js` `output` 中增加一个`publicPath`，我们当前用`/`，相对于当前路径，如果你要改成别的`url`，就改这里就好了。

```javascript
    output: {
        publicPath : '/'
    }
```

## 打包优化

你现在打开`dist`，是不是发现好多好多文件，每次打包后的文件在这里混合了？我们希望每次打包前自动清理下`dist`文件。

```javascript
npm install clean-webpack-plugin --save-dev
webpack.config.js
const CleanWebpackPlugin = require('clean-webpack-plugin');


plugins: [
    new CleanWebpackPlugin(['dist'])
]
```

现在`npm run build`试试，是不是之前的都清空了。当然我们之前的`api`文件夹也被清空了，不过没关系哦~本来就是测试用的。

## 抽取css

目前我们的`css`是直接打包进`js`里面的，我们希望能单独生成`css`文件。

我们使用[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)来实现。

```bash
npm install --save-dev extract-text-webpack-plugin
```

## 使用axios和middleware优化API请求

先安装下[axios](https://github.com/mzabriskie/axios)

```bash
npm install --save axios
```

然后在dispatch(getUserInfo())后，通过`redux`中间件来处理请求逻辑。

中间件的教程看[这里](http://cn.redux.js.org/docs/advanced/Middleware.html)

我们想想中间件的逻辑

1. 请求前`dispatch` `REQUEST`请求。
2. 成功后`dispatch` `SUCCESS`请求，如果定义了`afterSuccess()`函数，调用它。
3. 失败后`dispatch` `FAIL`请求。

`npm start`看看我们的网络请求是不是正常哦。

## 调整文本编辑器,实现自动编译

使用自动编译代码时，可能会在保存文件时遇到一些问题。某些编辑器具有“安全写入”功能，可能会影响重新编译。

要在一些常见的编辑器中禁用此功能，请查看以下列表：

- Sublime Text 3 - 在用户首选项(user preferences)中添加 atomic_save: "false"。
- IntelliJ - 在首选项(preferences)中使用搜索，查找到 "safe write" 并且禁用它。
- Vim - 在设置(settings)中增加 :set backupcopy=yes。
- WebStorm - 在 Preferences > Appearance & Behavior > System Settings 中取消选中 Use "safe write"。

## 合并提取`webpack`公共配置

想象一个场景，现在我想给`webpack`增加一个`css modules`依赖，你会发现，WTF?我即要修改`webpack.dev.config.js`，又要修改`webpack.config.js`~

这肯定不行啊。所以我们要把公共的配置文件提取出来。提取到`webpack.common.config.js`里面~

`webpack.dev.config.js`和`webpack.config.js`写自己的特殊的配置。

这里我们需要用到[webpack-merge](https://github.com/survivejs/webpack-merge)来合并公共配置和单独的配置。

这样说一下，应该看代码就能看懂了。下次公共配置直接就写在`webpack.common.config.js`里面啦。

> 这里偷偷说下，我修改了`CleanWebpackPlugin`的参数，不让他每次构建都删除`api`文件夹了。要不每次都得复制进去。麻烦~

```bash
npm install --save-dev webpack-merge
```

## 优化目录结构并增加404页面

现在我们优化下目录结构，把`router`和`nav`分开，新建根组件`App`。

1. `component`改名为`components`,因为是复数。。。注意修改引用的地方哦。
2. 新建根组件`components/App/APP.js`

```javascript
import React, {Component} from 'react';

import Nav from 'components/Nav/Nav';
import getRouter from 'router/router';

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                {getRouter()}
            </div>
        )
    }
}
```

1. 新建`components/Nav/Nav`组件，把`router/router.js`里面的`nav`提出来。
2. 新建`components/Loading/Loading`组件,把`router/router.js`里面的`Loading`提出来。
3. 入口文件`src/index.js`修改

```javascript
import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router} from 'react-router-dom';
import App from 'components/App/App';

renderWithHotReload(App);

if (module.hot) {
    module.hot.accept('components/App/App', () => {
        const NextApp = require('components/App/App').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <RootElement/>
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}
```

1. 新建`pages/NotFound/NotFound`组件。
2. 修改`router/router.js`，增加`404`

```javascript
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';

<Route component={createComponent(NotFound)}/>
```

## 加入 babel-plugin-transform-runtime 和 babel-polyfill

1. 先来说说[babel-plugin-transform-runtime](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime)

   > 在转换 ES2015 语法为 ECMAScript 5 的语法时，babel 会需要一些辅助函数，例如 _extend。babel 默认会将这些辅助函数内联到每一个 js 文件里，这样文件多的时候，项目就会很大。

   > 所以 babel 提供了 transform-runtime 来将这些辅助函数“搬”到一个单独的模块 babel-runtime 中，这样做能减小项目文件的大小。

```bash
npm install --save-dev babel-plugin-transform-runtime
```

修改`.babelrc`配置文件,增加配置

.babelrc

```javascript
     "plugins": [
       "transform-runtime"
     ]
```

1. 再来看[babel-polyfill](https://babeljs.io/docs/usage/polyfill/)

   Q: 为什么要集成`babel-polyfill`?

   A:

   > Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。
   > 举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。

   网上很多人说，集成了`transform-runtime`就不用`babel-polyfill`了，其实不然，看看官方怎么说的：

   > NOTE: Instance methods such as "foobar".includes("foo") will not work since that would require modification of existing built-ins (Use babel-polyfill for that).

   所以，我们还是需要`babel-polyfill`哦。

   `npm install --save-dev babel-polyfill`

   修改webpack两个配置文件。

   `webpack.common.config.js`

```javascript
        app: [
            "babel-polyfill",
            path.join(__dirname, 'src/index.js')
        ]
```

   `webpack.dev.config.js`

   ```javascript
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
   ```

参考地址：

1. <http://www.ruanyifeng.com/blog/2016/01/babel.html>
2. [lmk123/blog#45](https://github.com/lmk123/blog/issues/45)
3. <https://github.com/thejameskyle/babel-handbook/blob/master/translations/zh-Hans/README.md>



## 集成PostCSS

[官方文档看这里](https://github.com/postcss/postcss)

Q: 这是啥？为什么要用它？

他有很多很多的插件，我们举几个例子~

[Autoprefixer](https://github.com/postcss/autoprefixer)这个插件,可以自动给css属性加浏览器前缀。

```css
/*编译前*/
.container{
    display: flex;
}
/*编译后*/
.container{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
```

[postcss-cssnext](http://cssnext.io/) 允许你使用未来的 CSS 特性（包括 autoprefixer）

当然，它有很多很多的插件可以用，你可以去官网详细了解。我们今天只用`postcss-cssnext`。（它包含了autoprefixer）

```bash
npm install --save-dev  postcss-loader
npm install --save-dev  postcss-cssnext
```

修改`webpack`配置文件,增加`postcss-loader`

webpack.dev.config.js

```javascript
        rules: [{
            test: /\.(css|scss)$/,
            use: ["style-loader", "css-loader", "postcss-loader"]
        }]
```

webpack.config.js

```javascript
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "postcss-loader"]
            })
        }]
```

根目录增加`postcss`配置文件。

```javascript
touch postcss.config.js
postcss.config.js
module.exports = {
    plugins: {
        'postcss-cssnext': {}
    }
};
```

现在你运行代码，然后写个css，去浏览器审查元素，看看，属性是不是生成了浏览器前缀？

## redux 模块热替换配置

今天突然发现，当修改reducer代码的时候，页面会整个刷新，而不是局部刷新唉。

这不行，就去查了webpack文档，果然是要配置的。[看这里](https://survivejs.com/webpack/appendices/hmr-with-react/#configuring-hmr-with-redux)

代码修改起来也简单,增加一段监听reducers变化，并替换的代码。

```javascript
src/redux/store.js
if (module.hot) {
    module.hot.accept("./reducers", () => {
        const nextCombineReducers = require("./reducers").default;
        store.replaceReducer(nextCombineReducers);
    });
}
```

哦了~

## 模拟AJAX数据之Mock.js

每个改进都是为了解决问题。

现在我在开发中碰到了问题，我先描述下问题：

我们现在做前后端完全分离的应用，前端写前端的，后端写后端的，他们通过API接口连接。

前端同学心理路程："后端同学接口写的好慢，我都没法调试了。"

是不是有这个问题呢？一般我们怎么解决？

第一种：自己这边随便造点数据，等后端接口写好了之后，再小修改,再调试。

第二种：想想我们之前获得用户信息的`dist/api/user.json`，我们可以用这种方式来调试。
但是想象下，我们要模拟一个文章列表，就要手动写几十列。oh~no!

并且，后端接口一般都不带`.json`，到时候对接，是不是还得改代码？

好了，下面介绍下今天的主角[Mock.js](http://mockjs.com/)。

他会做一件事情：**拦截AJAX请求，返回需要的数据！**

我们写AJAX请求的时候，正常写，Mock.js会自动拦截的。

Mock.js提供各种随机生成数据。具体可以去官网看~

下面我们就在项目中集成咯：

1. `npm install mockjs --save-dev`

2. 新建mock文件夹

   `touch mock`

3. 模拟一个我们之前用到的`/api/user`接口

   ```bash
    cd mock
    touch mock.js
   ```

   `mock/mock.js`

   ```javascript
    import Mock from 'mockjs';
    
    let Random = Mock.Random;
    
    Mock.mock('/api/user', {
        'name': '@cname',
        'intro': '@word(20)'
    });
   ```

   上面代码的意思就是，拦截`/api/user`，返回随机的一个中文名字，一个20个字母的字符串。

   我知道你看不懂，你去看看[Mock.js](http://mockjs.com/)文档就能看懂啦！

4. 与我们的项目连接。到目前为止，刚才定义的接口和我们的项目还没有关系。

   先来做，在`src/index.js`里面增加一行代码：

   `src/index.js`

   ```javascript
   import '../mock/mock';
   ```

5. 现在我们删除`dist/api`文件夹，然后修改之间的接口路径，把`.json`去掉。

   `rm -rf dist/api`

   `src/redux/actions/userInfo.js`

   ```javascript
   /*promise: client => client.get(`/api/user.json`)*/
   
   promise: client => client.get(`/api/user`)
   ```

   现在我们运行`npm start`，到获取用户信息界面，看每次获取用户信息都会变化呀？

到这里还没完，我们还要配置：只有在开发坏境下，才引入`mock`，在生产坏境，不引入。

跟着我做：

先给`mock`文件夹加个别名，这个我就不单独介绍了：

```javascript
webpack.common.config.js
    resolve: {
        alias: {
            ...
            mock: path.join(__dirname, 'mock')
        }
    }
```

`webpack.dev.config.js`增加

```javascript
   const webpack = require('webpack');


   plugins:[
        new webpack.DefinePlugin({
               MOCK: true
        })
    ]
```

然后修改`src/index.js`刚才加的那句话为下面这样

```javascript
if (MOCK) {
    require('mock/mock');
}
```

这样，就只会在`npm start` 开发模式下，才会应用mock，如果你不想用，就把MOCK改成false就好了。

哦了，到这里就结束了~回头缕下：

我们定义了mock，在index.js引入。

mock的工作就是，拦截AJAX请求，返回模拟数据。

## 使用 CSS Modules

关于什么是`CSS Modules`，我这里不介绍。

可以去看阮一峰的文章[CSS Modules 用法教程](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)

修改以下几个地方：

1. `webpack.dev.config.js`

   ```javascript
   module: {
           rules: [{
               test: /\.css$/,
               use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]", "postcss-loader"]
           }]
       }
   ```

2. `webpack.config.js`

   ```javascript
   module: {
       rules: [{
           test: /\.css$/,
           use: ExtractTextPlugin.extract({
               fallback: "style-loader",
               use: ["css-loader?modules&localIdentName=[local]-[hash:base64:5]", "postcss-loader"]
           })
       }]
   }
   ```

3. `src/pages/Page1/page1.css`

   ```css
   .box {
       border: 1px solid red;
   }
   ```

4. `src/pages/Page1/Page1.js`

   ```javascript
   import React, {Component} from 'react';
   
   import style from './Page1.css';
   
   import image from './images/brickpsert.jpg';
   
   export default class Page1 extends Component {
       render() {
           return (
               <div className={style.box}>
                   this is page1~
                   <img src={image}/>
               </div>
           )
       }
   }
   ```

enjoy it!

## 使用 json-server 代替 Mock.js

[json-server](https://github.com/typicode/json-server)和`Mock.js`一样，都是用来模拟接口数据的。

`json-server`功能更强大，支持分页，排序，筛选等等，具体的可以去看[文档](https://github.com/typicode/json-server)。

我们用`json-server`代替之前的`Mock.js`。

1. 删除`Mock.js`相关代码。

   一共两处，`webpack.dev.config.js`,`src/index.js`

2. `npm install --save-dev json-server`

3. 写个demo，我们生成虚假数据还是用`mockjs`。

```javascript
mock/mock.js
let Mock = require('mockjs');

var Random = Mock.Random;

module.exports = function () {
    var data = {};
    data.user = {
        'name': Random.cname(),
        'intro': Random.word(20)
    };
    return data;
};
```

1. 设置启动脚本

```javascript
package.json
"mock": "json-server mock/mock.js --watch --port 8090",
"mockdev": "npm run mock & npm start"
```

1. webpack.dev.config.js 增加个代理，把我们的API请求，代理到`json-server`服务器去。

```javascript
   devServer: {
        ...
        proxy: {
                    "/api/*": "http://localhost:8090/$1"
                }
    }
```

哦了，你可以`npm run mockdev`启动项目，然后访问我们之前的用户信息接口，试试啦。

**问题：windows不支持命令并行执行&，你可以分开执行，或者使用npm-run-all**

## 快速生成Github README.md的目录

熟悉Github的同学可能知道创建一个Repo，通常都会生成一个README.md。好的README能增加代码的可阅读性。另外通常也可以将README作为开发文档。而这个README本身是遵循Markdown语法的，但是Markdown本身并没有绝对标准，Github的渲染方式与一些常用博客渲染方式不相同，导致在使用时有些麻烦。这里推荐一个Github上的教程。

[GFM教程](https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fguodongxiaren%2FREADME%2Fblob%2Fmaster%2FREADME.md)

[GFM教程博客地址](https://link.jianshu.com?t=http%3A%2F%2Fblog.csdn.net%2Fkaitiren%2Farticle%2Fdetails%2F38513715)

事实上大部分和普通Markdown还是类似的，但是目录的语法差别蛮大，刚好对于笔者而言，最近需要在Github上文档上建立目录来使用，但是又不想写GFM的语法。这个时候刚好搜索到了一些可以用的开源代码。这里简单介绍一个目前使用的方法。

### Github+百度搜索结果



![img](https:////upload-images.jianshu.io/upload_images/3229757-ded8dc8a31cd7989.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)



事实上解决方案还蛮多的（Github大法好）。

当时还在百度上搜索了下，找到了这个方案。

[ghtoc Github地址（pyhon）](https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fsk1418%2Fghtoc)

[ghtoc博客](https://link.jianshu.com?t=https%3A%2F%2Fwww.v2ex.com%2Ft%2F151106)

### 解决方案：gh-md-toc

后面发现了gh-md-toc这个神器。

[gh-md-toc Github地址](https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fekalinin%2Fgithub-markdown-toc)

但是这个东西在Mac和Linux很友好，windows似乎不那么友好。不过这里也给了windows的解决方案。



![img](https:////upload-images.jianshu.io/upload_images/3229757-31243336441b1b39.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/903/format/webp)



就是github-markdown-toc.go。

[github-markdown-toc.go Github地址](https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fekalinin%2Fgithub-markdown-toc.go)

如果你有GO语言（又是你）的编译环境，可以尝试自己编译，如果没有，可以直接下载编译好的二进制文件。

[二进制文件](https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fekalinin%2Fgithub-markdown-toc.go%2Freleases)

下载下来之后，发现没有后缀名无法识别，实际上这是个exe文件，所以只需要暴力地在后面加上.exe就可以开始愉快使用了。

首先将README.md文档复制到gh-md-toc.exe的根目录下。

接着按住shift键同时右击。



![img](https:////upload-images.jianshu.io/upload_images/3229757-952062482956f2a8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/282/format/webp)



打开Powershell窗口后，直接键入。

```bash
./gh-md-toc.exe README.md
```



![img](https:////upload-images.jianshu.io/upload_images/3229757-4d7a8fa988051fd7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/962/format/webp)



接下来只需将这段话复制粘贴到README.md里面即可。

作者：G小调的Qing歌

链接：https://www.jianshu.com/p/302abe331dcb

来源：简书

简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。