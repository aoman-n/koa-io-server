import * as Router from 'koa-router';

const router = new Router();

// router.prefix("/v1");

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    name: 'hogemisokun',
  });
});

export default router;
