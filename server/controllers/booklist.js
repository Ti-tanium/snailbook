const { mysql } = require('../qcloud')

module.exports = async ctx => {
    const size = 5
    const { page } = ctx.request.query
    const books = await mysql('book')
        .join('cSessionInfo', 'book.openid', '=', 'cSessionInfo.open_id')
        .select('book.*', 'cSessionInfo.user_info')
        .limit(size)
        .offset(page * size)
        .orderBy('book.id', 'desc')
    ctx.state.data = {
        list: books.map(v => {
            const info = JSON.parse(v.user_info)
            return Object.assign(v, {
                nickName: info.nickName
            })
        })
    }
}
