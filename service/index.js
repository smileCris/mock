const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })

  if (req.url === '/api/user') {
    const resJson = {
      status: 200,
      data: {
        birthday: '1984-09-26 19:15:59',
        score: 800,
        rank: 100,
        stars: 5,
        nickname: '灰太狼',
        boo: true,
        email: 'huitailang@htl.cm',
        city: '青青草原'
      },
      timestamp: new Date().getTime()
    }
    res.write(JSON.stringify(resJson))
    res.end()
  }

}).listen(3000)
