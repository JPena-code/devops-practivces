import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

const PORT = process.env.PORT || 3000

router.get('home', '/', (ctx, next) => {
  ctx.body = { message: 'hello' }
  return ctx
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(PORT, () => {
  console.log('Server is listening on port http://localhost:%d', PORT)
})
