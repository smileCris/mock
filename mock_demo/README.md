# 使用 mock 数据

- 安装依赖
```npm install mockjs --save-dev```
- 新建 mock.js 文件

```js
// 引入 mock.js
import Mock from 'mockjs'

// 使用 mockjs 模拟数据
Mock.mock(/\/api\/test/, {
  'status': 200,
  'data': {
    'mtime': '@datetime', // 随机生成日期时间
    'score|1-800': 800, // 随机生成1-800的数字
    'rank|1-100': 100, // 随机生成1-100的数字
    'stars|1-5': 5, // 随机生成1-5的数字
    'nickname': '@cname', // 随机生成中文名字
    'boo|1-2': true,
    'email': '@email',
    'city': '@city(true)'
  }
})
```

- 在main.js里面引入该文件

```js
import '@/apis/mock/mock.js'
```

- 在 vue 文件中调用

```js
mounted () {
    this.$axios.get('/api/test').then(res => {
      console.log(res.data)
    }, err => console.log(err))
  }
```
