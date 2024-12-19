const { HttpStatusCode } = require("axios");
const api = require("../../../helpers/api");
const db = require("../../../../db/models");
const m_pillar = db.m_pillar;

class Controller {
  static async index(req, res) {
    try {
      const limit = parseInt(req.query.per_page, 10) || 10;
      const page = parseInt(req.query.page, 10) || 1;
      const offset = (page - 1) * limit;

      const data = await m_pillar.findAndCountAll({
        limit,
        offset,
        order: [["createdAt", "DESC"]],
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
      const data = await m_pillar.findByPk(id);
      if (!data) {
        const error = new Error("Pillar Not Found!");
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
    const { subdistrict_id, name, code, coordinate } = req.body;
    try {
      const checkSubDistrictId = await db.m_subdistrict.findByPk(subdistrict_id);
      if (!checkSubDistrictId) {
        const error = new Error("subdistrict Not Found!");
        error.code = HttpStatusCode.BadRequest;
        throw error;
      }
      const data = await m_pillar.create({ subdistrict_id, name, code, coordinate });
      res.status(HttpStatusCode.Ok).json(api.results(data, HttpStatusCode.Ok, { req }));
    } catch (err) {
      const statusCode = err.code || HttpStatusCode.InternalServerError;
      return res.status(statusCode).json(api.results(null, statusCode, { err }));
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { subdistrict_id, name, code, coordinate } = req.body;
    try {
      const checkSubDistrictId = await db.m_subdistrict.findByPk(subdistrict_id);
      if (!checkSubDistrictId) {
        const error = new Error("subdistrict Not Found!");
        error.code = HttpStatusCode.BadRequest;
        throw error;
      }
      const data = await m_pillar.findByPk(id);
      if (!data) {
        const error = new Error("Pillar Not Found!");
        error.code = HttpStatusCode.BadRequest;
        throw error;
      }
      await data.update({ subdistrict_id, name, code, coordinate });
      res.status(HttpStatusCode.Ok).json(api.results(data, HttpStatusCode.Ok, { req }));
    } catch (err) {
      const statusCode = err.code || HttpStatusCode.InternalServerError;
      return res.status(statusCode).json(api.results(null, statusCode, { err }));
    }
  }

  static async destroy(req, res) {
    const { id } = req.params;
    try {
      const data = await m_pillar.findByPk(id);
      if (!data) {
        const error = new Error("pillar Not Found!");
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
