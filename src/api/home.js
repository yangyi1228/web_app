import request from '@/utils/request'

export const shortcut = () => request({
    url: '/home/shortcut',
    method: 'GET'
})

export const category = () => request({
    url: '/home/category',
    method: 'GET'
})

export const brand = () => request({
    url: '/home/brand',
    method: 'GET'
})

export const banner = () => request({
    url: '/home/banner',
    method: 'GET'
})

export const like = () => request({
    url: '/home/like',
    method: 'GET'
})

export const goods = (params) => request({
    url: 'home/goods',
    method: 'GET',
    params
})