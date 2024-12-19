const { checkSchema } = require("express-validator");
const { numericValidation, stringValidation } = require("../../../helpers/check_validation");

exports.indexSchema = checkSchema({
  per_page: numericValidation("Per Page", false),
  page: numericValidation("Page", false),
});

exports.storeSchema = checkSchema({
  name: stringValidation("Name", 500, true),
  description: stringValidation("Description", 500, true),
  coordinate: stringValidation("Coordinate", 500, true),
});

exports.updateSchema = checkSchema({
  name: stringValidation("Name", 500, true),
  description: stringValidation("Description", 500, true),
  coordinate: stringValidation("Coordinate", 500, true),
});
