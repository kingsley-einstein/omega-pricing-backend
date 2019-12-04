const { Jwt } = require("../helpers");
const { Admin, Token } = require("../db");

module.exports = {
  async checkToken(req, res, next) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        res.status(401).json({
          statusCode: 401,
          body: "Authorization header not present in request."
        });
        return;
      }
      if (!authorization.startsWith("Bearer")) {
        res.status(401).json({
          statusCode: 401,
          body: "Authorization  header must begin with 'Bearer'"
        });
        return;
      }
      const token = authorization.substring(7, authorization.length);
      const payload = Jwt.decode(token);
      if (!payload) {
        res.status(401).json({
          statusCode: 401,
          body: "Token is invalid"
        });
        return;
      }
      const loggedOut = await Token.findByActual(token);
      if (loggedOut) {
        res.status(401).json({
          statusCode: 401,
          body: "Only logged in users can access this resource"
        });
        return;
      }
      const user = await Admin.findByPk(payload.id);
      if (!user) {
        res.status(401).json({
          statusCode: 401,
          body: "Unable to authenticate user"
        });
        return;
      }
      req.user = user;
      req.token = token;
      next();
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        body: error
      });
    }
  }
};
