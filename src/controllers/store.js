const { Store } = require("../db");

module.exports = {
  async create(req, res) {
    try {
      const { body } = req;
      const data = await Store.create(body);
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
  async getStore(req, res) {
    try {
      const body = await Store.findByPk(req.params.id);
      res.status(200).json({
        statusCode: 200,
        body
      });
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        body: error
      });
    }
  },
  async getStores(req, res) {
    try {
      const body = await Store.findAll();
      res.status(200).json({
        statusCode: 200,
        body
      });
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        body: error
      });
    }
  },
  async editStore(req, res) {
    try {
      const { body, params } = req;
      const { id } = params;
      const update = await Store.update(body, {
        where: {
          id
        }
      });
      res.status(200).json({
        statusCode: 200,
        body: update[1][0]
      });
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        body: error
      });
    }
  },
  async deleteStore(req, res) {
    try {
      const { id } = req.params;
      const items = await Store.destroy({
        where: {
          id
        }
      });
      res.status(200).json({
        statusCode: 200,
        body: `${items} item(s) deleted`
      });
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        body: error
      });
    }
  }
};
