**前端模块化项目模板（SPA单页应用）**

**基本框架：** fis3(构建工具) + vue（框架） + zepto（类库） + seaJs（模块化） + director（路由）

```bash
运行项目，步骤如下（预先安装nodeJS）：
npm install   安裝package.json內必要的褲
npm install -g fis3 安裝fis3

fis3 release -wL   启动代码发布，自动监听变化发布，自动刷新浏览器
                  （fis3 release会遇到失败，提示依赖某些插件，根据提示安装对应插件即可）
fis3 server start  启动fis3服务，即可预览

```


目录结构如下：
```
project
  ├─ modules     工程模块
  │  ├─ common  公共模块
  │  │  └─ baseDialogPage 模态窗口基类
  │  │  └─ basePage       所有模块基类
  │  ├─ components         独立组件
  │  │  ├─ header
  │  │  └─ .....
  │  └─ pages               一般页面、弹框模块
  │     ├─ selectCity
  │     └─ home
  ├─ static      静态资源
  │  ├─ css     
  │  ├─ images  
  │  ├─ js      
  ├─ app.js         项目入口
  ├─ fis-conf.js    fis编译配置
  ├─ index.html     html页面
  ├─ package.json   npm配置文件 
  ...
```



 - [Vue官网](http://cn.vuejs.org/guide/installation.html) 
 - [Fis3官网](http://fis.baidu.com/) 
