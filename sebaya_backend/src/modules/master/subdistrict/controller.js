const { HttpStatusCode } = require("axios");
const api = require("../../../helpers/api");
const db = require("../../../../db/models");
const m_subdistrict = db.m_subdistrict;

class Controller {
  static async index(req, res) {
    try {
      const limit = parseInt(req.query.per_page, 10) || 10;
      const page = parseInt(req.query.page, 10) || 1;
      const offset = (page - 1) * limit;

      const data = await m_subdistrict.findAndCountAll({
        limit,
        offset,
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: db.m_pillar,
            as: "pillars",
          },
        ],
      });
      res.status(HttpStatusCode.Ok).json(api.results(data, HttpStatusCode.Ok, { req }));
    } catch (err) {
      const statusCode = err.code || HttpStatusCode.InternalServerError;
      return res.status(statusCode).json(api.results(null, statusCode, { err }));
    }
  }

  static async show(req, res) {
    const { id } = req.params;
    try {
      const data = await m_subdistrict.findByPk(id, {
        include: [
          {
            model: db.m_pillar,
            as: "pillars",
          },
        ],
      });
      if (!data) {
        const error = new Error("subdistrict Not Found!");
        error.code = HttpStatusCode.BadRequest;
        throw error;
      }
      res.status(HttpStatusCode.Ok).json(api.results(data, HttpStatusCode.Ok, { req }));
    } catch (err) {
      const statusCode = err.code || HttpStatusCode.InternalServerError;
      return res.status(statusCode).json(api.results(null, statusCode, { err }));
    }
  }

  static async store(req, res) {
    const { district_id, name, description, coordinate } = req.body;
    try {
      const checkDistrictId = await db.m_district.findByPk(district_id);
      if (!checkDistrictId) {
        const error = new Error("district Not Found!");
        error.code = HttpStatusCode.BadRequest;
        throw error;
      }
      const data = await m_subdistrict.create({ district_id, name, description, coordinate });
      res.status(HttpStatusCode.Ok).json(api.results(data, HttpStatusCode.Ok, { req }));
    } catch (err) {
      const statusCode = err.code || HttpStatusCode.InternalServerError;
      return res.status(statusCode).json(api.results(null, statusCode, { err }));
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { district_id, name, description, coordinate } = req.body;
    try {
      const checkDistrictId = await db.m_district.findByPk(district_id);
      if (!checkDistrictId) {
        const error = new Error("district Not Found!");
        error.code = HttpStatusCode.BadRequest;
        throw error;
      }
      const data = await m_subdistrict.findByPk(id);
      if (!data) {
        const error = new Error("subdistrict Not Found!");
        error.code = HttpStatusCode.BadRequest;
        throw error;
      }
      await data.update({ district_id, name, description, coordinate });
      res.status(HttpStatusCode.Ok).json(api.results(data, HttpStatusCode.Ok, { req }));
    } catch (err) {
      const statusCode = err.code || HttpStatusCode.InternalServerError;
      return res.status(statusCode).json(api.results(null, statusCode, { err }));
    }
  }

  static async destroy(req, res) {
    const { id } = req.params;
    try {
      const data = await m_subdistrict.findByPk(id);
      if (!data) {
        const error = new Error("subdistrict Not Found!");
        error.code = HttpStatusCode.BadRequest;
        throw error;
      }
      await data.destroy();
      res.status(HttpStatusCode.Ok).json(api.results(data, HttpStatusCode.Ok, { req }));
    } catch (err) {
      const statusCode = err.code || HttpStatusCode.InternalServerError;
      return res.status(statusCode).json(api.results(null, statusCode, { err }));
    }
  }
}

module.exports = Controller;
