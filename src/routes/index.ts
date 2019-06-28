import * as Router from 'koa-router';

const router = new Router();

// router.prefix("/v1");

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Redis',
    cssFile: 'test.css',
  });
});

export default router;
