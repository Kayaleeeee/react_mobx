const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api/books",
    createProxyMiddleware({
      target: "http://localhost:9090",
      //   changeOrigin: true,
    })
  );

  app.use(
    "/api/todos/",
    createProxyMiddleware({
      target: "http://localhost:4041",
      //   changeOrigin: true,
    })
  );
};
