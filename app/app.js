import Koa from 'koa';
import logger from './logger';

const app = new Koa();

const port = 3000;
const hostname = '127.0.0.1';

app.use(logger());
app.use(logger(':method :url'));

app.use((ctx, next) => {
  const start = new Date();
  console.log('app 1');
  return next().then(() => {
    const ms = new Date() - start;
    console.log('app 1 callback');
    console.log(`app 1-${ctx.method} ${ctx.url} - ${ms}ms`);
  });
});

app.use(async (ctx, next) => {
  const start = new Date();
  console.log('app 2');
  await next();
  const ms = new Date() - start;
  console.log('app 2 callback');
  console.log(`app 2-${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use((ctx) => {
  console.log('app 3');
  ctx.body = '你好，Koa2';
});

app.listen(port, hostname, () => {
  console.log(`server has running at http://${hostname}:${port}`);
});

export default app;
