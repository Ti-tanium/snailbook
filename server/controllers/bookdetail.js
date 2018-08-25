const { mysql } = require('../qcloud')

module.exports = async ctx => {
    const { id } = ctx.request.query
    await mysql('book')
        .where('id', id)
        .increment('count', 1)
}
