import * as Koa from 'koa';
import * as cors from "kcors";
import * as BodyParser from 'koa-bodyparser';
import * as koaLogger from 'koa-logger';
import router from './routes';
import Socket from './utils/socket';

const app = new Koa();

app.use(
  koaLogger((str, args) => {
    console.log(str);
  }),
);
app.use(cors())
app.use(BodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.on("error", error => {
  console.log("Server error: %j", error);
});

const port = process.env.PORT || 8888;
const server = app.listen(port, () => {
  console.log("Server listening on port", port);
});

Socket(server);