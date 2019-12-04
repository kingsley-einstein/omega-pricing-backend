const MainRouter = require("../routes");

module.exports = (app) => {
  return (logger, { json, urlencoded }) => {
    app.use(json());
    app.use(urlencoded({
      extended: false
    }));
    app.use(logger("dev"));
    app.use("/api/v1", MainRouter);
  }
}
