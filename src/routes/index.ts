import * as Router from 'koa-router';

const router = new Router();

// router.prefix("/v1");

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello World';
  ctx.status = 200;
});

export default router;
