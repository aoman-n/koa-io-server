import * as Koa from 'koa';
import * as cors from 'kcors';
import * as path from 'path';
import * as render from 'koa-ejs';
import * as serve from 'koa-static';
import * as BodyParser from 'koa-bodyparser';
import * as koaLogger from 'koa-logger';
import router from './routes';
import Socket from './utils/socket';
import { config, IconfigEntity } from './config';

const app = new Koa();

render(app, {
  root: path.join(__dirname, '../views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true,
});

app.use(
  koaLogger((str, args) => {
    console.log(str);
  })
);
app.use(cors());
app.use(BodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(path.join(__dirname, '../public')));

app.on('error', error => {
  console.log('Server error: %j', error);
});

const server = app.listen(config.port, () => {
  console.log('Server listening on port', config.port);
});

Socket(server);
