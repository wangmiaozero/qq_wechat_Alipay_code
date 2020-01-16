const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
// 注册解析表单数据的中间件
app.use(bodyParser.urlencoded({ extended: false }))
// 导入 session 中间件
const session = require('express-session')
app.use(
  session({
    secret: '加密',
    resave: false,
    saveUninitialized: false
  })
)
//设置EJS
app.set('view engine', 'ejs')
app.set('views', 'views')
//读取路由
fs.readdir(path.join(__dirname, './router'), (err, filename) => {
  filename.forEach(flie => {
    const router = require(path.join(__dirname, './router', flie))
    app.use(router)
  })
})

function is_code() {
  var $ua = navigator.userAgent.toLowerCase()
  var $type = ''
  var $name = ''
  var $url = ''
  var $icon_img = ''
  if ($ua.match(/MicroMessenger/i) == 'micromessenger') {
    $type = 'wepay'
    $name = '微信支付'
    //微信支付链接
    $url = 'wxp://f2f0OI0K-DjKTUUo5ijir72IR4EeOdb9__8h'
    $icon_img = `<img src="http://ww2.sinaimg.cn/large/005zWjpngy1fojrwgr20oj303k03kglg.jpg" width="48px" height="48px" alt=".$name."/>`
  } else if ($ua.match(/AlipayClient/i) == 'alipayclient') {
    //支付宝链接
    $url = 'HTTPS://QR.ALIPAY.COM/FKX028454NIDTGHALS3WAF'
    location.href = $url
    // header('location: '.$url);
  } else if ($ua.match(/QQ/i) == 'qq') {
    $type = 'qq'
    $name = 'QQ钱包支付'
    //QQ钱包支付链接
    $url =
      'https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&a=1&u=462369233&ac=85CCA61B3297A14170CA733F85CFD04570EA3B81CB753F421194E5C79701B294&n=Mamba&f=wallet'
    $icon_img = `<img src="http://ww2.sinaimg.cn/large/005zWjpngy1fojrvmp427j303k03kjrb.jpg" width="48px" height="48px" alt=".${$name}."/>`
  } else {
    $type = 'qq'
    $name = 'QQ钱包支付'
    //QQ钱包支付链接
    $url =
      'https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&a=1&u=462369233&ac=85CCA61B3297A14170CA733F85CFD04570EA3B81CB753F421194E5C79701B294&n=Mamba&f=wallet'
    $icon_img = `<img src="http://ww2.sinaimg.cn/large/005zWjpngy1fojrvmp427j303k03kjrb.jpg" width="48px" height="48px" alt=".${$name}."/>`
  }
  console.log($ua.match())
  console.log($ua)
  console.log($icon_img)
  let data = {
    $type,
    $name,
    $url,
    $icon_img
  }
  return data
}
// 托管静态资源
app.use('/common', express.static('./common'))
app.get('/', (req, res) => {
  res.render('index.ejs', {})
})
app.listen(2333, () => {
  console.log('====================================')
  console.log('server running at http://127.0.0.1:2333')
  console.log('====================================')
})
