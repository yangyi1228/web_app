const express = require('express')
const router = new express.Router()
const verificationCode = require('../mock/verification-code')
const id = require('../mock/id')
const fs = require('fs')

router.get('/register/code', (req,res) => {
    let { id } = verificationCode()
    const obj = {
        phone:req.query.phone,
        code:id
    }
    fs.writeFile('C:\\Users\\yang\\Desktop\\新建文件夹\\web_app\\API\\json\\register_code.json', JSON.stringify(obj), (err) => {
        if (err) return console.log(err);
        setTimeout(() => {
            fs.readFile('C:\\Users\\yang\\Desktop\\新建文件夹\\web_app\\API\\json\\register_code.json', "utf-8", (err, data) => {
                if (err) return console.log(err);
                console.log(data);
                fs.writeFile('C:\\Users\\yang\\Desktop\\新建文件夹\\web_app\\API\\json\\register_code.json', '', (err) => { 
                    if (err) return console.log(err);
                })
            })
        },60000)
    })
    res.send(id)
})

router.post('/register', (req, res) => {
    fs.readFile('C:\\Users\\yang\\Desktop\\新建文件夹\\web_app\\API\\json\\register_code.json', "utf-8", (err, data) => {
        if (err) return console.log(err);
        let obj1 = JSON.parse(data)
        if (req.body.code === obj1.code && req.body.phone === obj1.phone) {
            fs.readFile('C:\\Users\\yang\\Desktop\\新建文件夹\\web_app\\API\\json\\account_bank.json', "utf-8", (err, data) => { 
                if (err) return console.log(err);
                let obj2 = JSON.parse(data)
                obj2.push({
                    id: id(),
                    phone: req.body.phone,
                    password:req.body.password
                })
                fs.writeFile('C:\\Users\\yang\\Desktop\\新建文件夹\\web_app\\API\\json\\account_bank.json', JSON.stringify(obj2), (err) => { 
                    if (err) { 
                        res.send({
                            status: '0',
                            msg: '注册失败2'
                        })
                     }
                    res.send({
                        status: '1',
                        msg: '注册成功'
                    })
                })
            })
        } else {
            res.send({
                status: '0',
                msg: '注册失败1'
            })
        }
    })
})

module.exports = router