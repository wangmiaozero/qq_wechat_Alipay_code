//引入转换编辑
const marked = require('marked')
const showindex = (req, res) => {
  res.send('a11111')
}
const showdenglu = (req, res) => {
  // res.send("2222222")
  res.render('./login.ejs', {})
}

const showarticle = (req, res) => {
  res.render('./article.ejs', {})
}
const showlogin = (req, res) => {
  const body = req.body
  res.send({
    msg: 'ok',
    status: 200,
    data: {
      'body.username': body.username,
      'body.password': body.password
    }
  })
  console.log(body)
  console.log(req.session)
  // 把 登录成功之后的用户信息，挂载到 session 上
  req.session.user = body
  req.session.login = true
}
const showarticleadd = (req, res) => {
  const body = req.body
  // 要先把 markdown 文本，转为 html 文本
  const html = marked(body.content)
  console.log(html)
  // res.render('./views/play.ejs',{html})
  res.send({ msg: 'ok', status: 200, data: html })
}
const shpowplay = (req, res) => {
  res.render('./play.ejs', {})
}
module.exports = {
  showindex,
  showdenglu,
  showlogin,
  showarticle,
  showarticleadd,
  shpowplay
}
