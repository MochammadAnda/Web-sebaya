const { HttpStatusCode } = require("axios");
const api = require("../../../helpers/api");
const db = require("../../../../db/models");
const m_gallery = db.m_gallery;

class Controller {
  static async index(req, res) {
    try {
      const limit = parseInt(req.query.per_page, 10) || 10;
      const page = parseInt(req.query.page, 10) || 1;
      const offset = (page - 1) * limit;

      const data = await m_gallery.findAndCountAll({
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
      const data = await m_gallery.findByPk(id);
      if (!data) {
        const error = new Error("Gallery Not Found!");
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
    const { name, imageUrl, coordinate } = req.body;
    try {
      const data = await m_district.create({ name, imageUrl, coordinate });
      res.status(HttpStatusCode.Ok).json(api.results(data, HttpStatusCode.Ok, { req }));
    } catch (err) {
      const statusCode = err.code || HttpStatusCode.InternalServerError;
      return res.status(statusCode).json(api.results(null, statusCode, { err }));
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { name, imageUrl = null, coordinate } = req.body;
    try {
      const data = await m_gallery.findByPk(id);
      if (!data) {
        const error = new Error("gallery Not Found!");
        error.code = HttpStatusCode.BadRequest;
        throw error;
      }
      const newImageUrl = imageUrl ? imageUrl : data.imageUrl;
      await data.update({ name, imageUrl: newImageUrl, coordinate });
      res.status(HttpStatusCode.Ok).json(api.results(data, HttpStatusCode.Ok, { req }));
    } catch (err) {
      const statusCode = err.code || HttpStatusCode.InternalServerError;
      return res.status(statusCode).json(api.results(null, statusCode, { err }));
    }
  }

  static async destroy(req, res) {
    const { id } = req.params;
    try {
      const data = await m_gallery.findByPk(id);
      if (!data) {
        const error = new Error("gallery Not Found!");
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
