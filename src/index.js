const express = require("express");
const app = express();
const config = require("./config");
const { sequelize } = require("./db");

const configure = (cb) => {
  cb(require("morgan"), express);
};

configure(config(app));

app.listen(process.env.PORT || 5889, () => {
  sequelize.sync().then(() => {
    console.log("Server running and connected to db");
  }); 
});
