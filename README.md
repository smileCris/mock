# Mock工具模拟接口联调

## nodejs 搭建后端 Mock 服务

### 运行命令

``` bash
# 打开 service 文件夹
cd service
# 起服务
node index.js
```

### 请求示例

- 接口 <http://localhost:3000/api/user>

## mockjs 模拟数据

[预览地址](https://smilecris.github.io/mock/mock_demo/dist/index.html)

## 使用示例

修改 mock_demo 项目下 App.vue 文件

```js
// 使用 mockjs 数据
// import { getUserInfo } from '@/apis/mock/user'
// 使用服务端模拟数据（需要先起 node 服务）
// import { getUserInfo } from '@/apis/services/user'
```
