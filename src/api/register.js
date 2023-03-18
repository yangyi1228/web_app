import request from '@/utils/request'

export const code = (phone) => request({
    url: '/register/code',
    method: 'GET',
    params: { phone }
})

export const register = (data) => request({
    url: '/register',
    method: 'POST',
    data
})