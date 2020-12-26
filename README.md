nextjs 自带服务器，但提供 ssr 相关的功能
nextjs

- 默认不支持 css 文件
- 路由传参只能通过 querystring(因为 pages 目录结构形成了路由)
- 路由映射，通过 as 属性，美化路由（但服务端不支持，需要 node 服务器拦截路由然后做参数转换后传递给 next，参考 3-4 路由映射）
- app/页面数据获取(getInitialProps)，只有 pages 下面的组件的该方法才会被调用
- 自定义 App
  - 固定 layout
  - 保持一些公用的状态
  - 给页面传入一些自定义数据
  - 自定义错误处理
- 自定义 document
  - ssr 时才会被调用，用来修改 ssr 的文档内容，一般配合第三方 css-in-js 方案使用

next/router

- 事件 hook
  - routeChangeStart
  - routeChangeComplete
  - routeChangeError
  - beforeHistoryChange
  - hashChangeStart
  - hashChangeComplete

因此需要自己起个 node 服务器来处理：

- 数据请求，聚合请求
- 域名等跨域问题
- session 存储
- 数据库 🔗
