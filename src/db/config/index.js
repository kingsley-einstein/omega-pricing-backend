const { db } = require("../../env");

module.exports = {
  host: db.host,
  username: db.username,
  password: db.password,
  port: db.port,
  database: db.name,
  dialect: "postgres",
  define: {
    underscored: true
  }
};
