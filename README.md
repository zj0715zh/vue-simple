# vue单页架构,这个是网上的下载的，再加上自己稍作更改，主要还是自己有点懒，请原谅我的抄袭。。
> vue-simple

### git仓库地址：git@github.com:zj0715zh/vue-simple.git

## Build Setup

``` bash
# 第一步安装依赖
npm install(注意npm版本)

# 第二步启动本地服务器，默认端口为8282
npm run dev

# 第三步本地构建
npm run build

##其实单页跟多页最明显的区别就是一个是生成单个模板实例，路由靠vue-router,一个是生成多个模板实例，路由可以由后端控制，具体可以看build目录下的webpack.prod.conf.js文件