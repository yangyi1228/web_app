const express = require('express')
const router = new express.Router()
const homeShortcut = require('../json/home_shortcut.json')
const homeBanner = require('../json/home_banner.json')
const homeBrand = require('../json/home_brand.json')
const homeCategory = require('../json/home_category.json')
const homeLike = require('../json/home_like.json')
const homeGoods = require('../json/home_goods.json')

router.get('/home/shortcut', (req, res) => {
    if (homeShortcut) {
        res.send({
            status: 1,
            msg: '成功',
            homeShortcut
        })
    } else {
        res.send({
            status: 0,
            msg: '失败',
            homeShortcut
        })
    }
})

router.get('/home/banner', (req, res) => {
    if (homeBanner) {
        res.send({
            status: 1,
            msg: '成功',
            homeBanner
        })
    } else {
        res.send({
            status: 0,
            msg: '失败',
            homeBanner
        })
    }
})

router.get('/home/brand', (req, res) => {
    if (homeBrand) {
        res.send({
            status: 1,
            msg: '成功',
            homeBrand
        })
    } else {
        res.send({
            status: 0,
            msg: '失败',
            homeBrand
        })
    }
})

router.get('/home/category', (req, res) => {
    if (homeCategory) {
        res.send({
            status: 1,
            msg: '成功',
            homeCategory
        })
    } else {
        res.send({
            status: 0,
            msg: '失败',
            homeCategory
        })
    }
})

router.get('/home/like', (req, res) => {
    if (homeLike) {
        res.send({
            status: 1,
            msg: '成功',
            homeLike
        })
    } else {
        res.send({
            status: 0,
            msg: '失败',
            homeLike
        })
    }
})

router.get('/home/goods', (req, res) => {
    const end = req.query.size * req.query.pages
    const start = end - req.query.size
    if (start <= homeGoods.length - 1) {
        res.send({
            status: 1,
            msg: '成功',
            sum: homeGoods.length-1,
            homeGoods: homeGoods.slice(start, end)
        })
    } else {
        res.send({
            status: 0,
            msg: '数据已加载完',
            homeGoods: null
        })
    }
})

module.exports = router