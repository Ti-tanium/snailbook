const { mysql } = require('../qcloud')

module.exports = async ctx => {
    const { pageIndex, pageSize } = ctx.request.query
    const books = await mysql('book')
        .join('cSessionInfo', 'book.openid', '=', 'cSessionInfo.open_id')
        .select('book.*', 'cSessionInfo.user_info')
        .limit(pageSize)
        .offset(pageIndex * pageSize)
        .orderBy('book.count', 'desc')
    ctx.state.data = {
        list: books.map(v => {
            const info = JSON.parse(v.user_info)
            return Object.assign(v, {
                nickName: info.nickName
            })
        })
    }
}
