const Mock = require('mockjs')

module.exports = function () {
    return {
        id: Mock.mock('@zip()')
    }
}