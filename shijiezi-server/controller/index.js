module.exports = {
    hello: async (ctx, next) => {
        ctx.response.body = 'Hello World'
    }
}