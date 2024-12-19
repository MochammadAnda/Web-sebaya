exports.stringValidation = (field, maxLength, isRequired = true) => {
  const validation = {
    isString: {
      errorMessage: `${field} must be a string`,
    },
    isLength: {
      options: { max: maxLength },
      errorMessage: `${field} maximum length is ${maxLength}`,
    },
  };

  if (isRequired) {
    validation.notEmpty = {
      errorMessage: `${field} cannot be empty`,
    };
  } else {
    validation.optional = { options: { nullable: true } };
  }

  return validation;
};

exports.enumValidation = (field, validValues, isRequired = true) => {
  const validation = {};

  if (isRequired) {
    validation.notEmpty = {
      errorMessage: `${field} is required`,
    };
  }

  validation.custom = {
    options: (value) => {
      if (!validValues.includes(value)) {
        throw new Error(`Invalid ${field} value`);
      }
      return true;
    },
  };

  return validation;
};

exports.numericValidation = (field, isRequired = true) => {
  const validation = {
    isNumeric: {
      errorMessage: `${field} must be a numeric value`,
    },
  };

  if (isRequired) {
    validation.notEmpty = {
      errorMessage: `${field} cannot be empty`,
    };
  } else {
    validation.optional = { options: { nullable: true } };
  }

  return validation;
};
