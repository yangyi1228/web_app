const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const cors = require('cors'); 
const homeRouter = require('./router/home_router')
const loginRouter = require('./router/login_router')
const registerRouter = require('./router/register_router')

app.use(bodyParser.json());
// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use(homeRouter)
app.use(loginRouter)
app.use(registerRouter)

app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
})