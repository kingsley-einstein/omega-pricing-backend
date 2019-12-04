const MainRouter = require("../routes");
const { cors } = require("../middlewares");

module.exports = (app) => {
  return (logger, { json, urlencoded }) => {
    app.use(json());
    app.use(urlencoded({
      extended: false
    }));
    app.use(logger("dev"));
    app.use(cors("*"));
    app.use("/api/v1", MainRouter);
  }
}
