const bcrypt = require("bcryptjs");
const { Admin, Token } = require("../db");
const { Jwt } = require("../helpers");

module.exports = {
  async create(req, res) {
    try {
      const { body } = req;
      const admin = await Admin.create(body);
      const data = {
        id: admin.id,
        email: admin.email
      };
      res.status(201).json({
        statusCode: 201,
        body: data
      });
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        body: error
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const admin = await Admin.findByEmail(email);
      if (!bcrypt.compareSync(password, admin.password)) {
        res.status(400).json({
          statusCode: 400,
          body: "Incorrect password"
        });
        return;
      }
      const data = {
        id: admin.id,
        email: admin.email,
        token: Jwt.tokenize({
          id: admin.id,
          password: admin.password
        })
      };
      res.status(200).json({
        statusCode: 200,
        body: data
      });
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        body: error
      });
    }
  },
  async logout(req, res) {
    try {
      const { user, token } = req;
      const loggedOut = await Token.create({
        actual: token
      });
      if (!loggedOut) {
        res.status(500).json({
          statusCode: 500,
          body: `Unable to sign out user: ${user.email}`
        });
        return;
      }
      res.status(200).json({
        statusCode: 200,
        body: `Successfully signed out user: ${user.email}`
      });
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        body: error
      });
    }
  },
  async getLoggedUser(req, res) {
    try {
      const { user } = req;
      const data = {
        id: user.id,
        email: user.email
      };
      res.status(200).json({
        statusCode: 200,
        body: data
      });
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        body: error
      });
    }
  }
};
