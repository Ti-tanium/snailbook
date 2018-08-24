const { mysql } = require('../qcloud')

module.exports = async ctx => {
    const books = await mysql('book')
        .select('*')
        .orderBy('id', 'desc')
    ctx.state.data = {
        list: books
    }
}
