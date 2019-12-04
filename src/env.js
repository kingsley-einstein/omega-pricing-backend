if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

module.exports = {
  db: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    name: process.env.DB_NAME,
    port: process.env.DB_PORT
  },
  jwtSecret: process.env.JWT_SECRET
};
