
// dependencies
import Koa from 'koa'
import jade from 'jade'
import path from 'path'

// middleware dependencies
import Router from 'koa-router'
import views from 'koa-views'

// init
const app = new Koa()
const router = new Router()

// middlewares
app
  .use(views(__dirname, { extension: 'jade' }))
  .use(router.routes())
  .use(router.allowedMethods())

// routes
router.get('/', async function (ctx, next) {
  await ctx.render('index')
})

// start app
app.listen(8080)
console.log('app listening')