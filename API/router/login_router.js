const express = require('express')
const router = new express.Router()
const accountBank = require('../json/account_bank.json')

router.post('/login', (req, res) => {
    accountBank.forEach(item => {
        if (item.account === req.body.account && item.password === req.body.password) {
            return res.send({
                status: '1',
                msg: '登录成功'
            })
        } else {
            return res.send({
                status: '0',
                msg: '登录失败'
            })
        }
    });
})

module.exports = router