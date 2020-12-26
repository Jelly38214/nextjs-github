const Koa = require("koa");
const KoaRouter = require("koa-router");
const Next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = Next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new KoaRouter();

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(router.routes());

  server.listen(3000, () => {
    console.log("Koa server listening on 3000");
  });
});
