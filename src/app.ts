import * as Koa from 'koa';
import * as cors from 'kcors';
import * as BodyParser from 'koa-bodyparser';
import * as koaLogger from 'koa-logger';
import router from './routes';
import Socket from './utils/socket';
import { config, IconfigEntity } from './config';

const app = new Koa();

app.use(
  koaLogger((str, args) => {
    console.log(str);
  })
);
app.use(cors());
app.use(BodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.on('error', error => {
  console.log('Server error: %j', error);
});

const server = app.listen(config.port, () => {
  console.log('Server listening on port', config.port);
});

Socket(server);
