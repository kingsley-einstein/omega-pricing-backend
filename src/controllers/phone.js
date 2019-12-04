const { Phone } = require("../db");

module.exports = {
  async addPhone(req, res) {
    try {
      const { body } = req;
      const data = await Phone.create(body);
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
  async editPhone(req, res) {
    try {
      const { body, params } = req;
      const update = await Phone.update(body, {
        where: {
          id: params.id
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
  async deletePhone(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Phone.destroy({
        where: {
          id
        }
      });
      res.status(200).json({
        statusCode: 200,
        body: `${deleted} item(s) deleted`
      });
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        body: error
      });
    }
  },
  async findAllPhones(req, res) {
    try {
      const phones = await Phone.findAll();
      res.status(200).json({
        statusCode: 200,
        body: phones
      });
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        body: error
      });
    }
  }
};
