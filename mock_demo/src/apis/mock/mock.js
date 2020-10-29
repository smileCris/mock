// 引入 mock.js
import Mock from 'mockjs'

// 使用 mockjs 模拟数据
Mock.mock(/\/mock\/user/, {
  'status': 200,
  'data': {
    'birthday': '@datetime', // 随机生成日期时间
    'score|1-800': 800, // 随机生成1-800的数字
    'rank|1-100': 100, // 随机生成1-100的数字
    'stars|1-5': 5, // 随机生成1-5的数字
    'nickname': '@cname', // 随机生成中文名字
    'boo|1-2': true,
    'email': '@email',
    'city': '@city(true)'
  },
  'timestamp': new Date().getTime()
})
