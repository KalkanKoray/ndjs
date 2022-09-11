const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const port = 3000

router.get('/' , ctx =>{
  ctx.status = 200
  ctx.body = '<h1>INDEX SAYFASINA HOSGELDINIZ</h1>'
})
router.get('/about' , ctx =>{
  ctx.status = 200
  ctx.body = '<h1>HAKKIMDA SAYFASINA HOSGELDINIZ</h1>'
})
router.get('/contact' , ctx =>{
  ctx.status = 200
  ctx.body = '<h1>ILETISIM SAYFASINA HOSGELDINIZ</h1>'
})
app.use(router.routes())
