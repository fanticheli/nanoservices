"use strict";

const service = require("./service/s3Service");

module.exports.upload = async (event) => {
  const result = await service.upload(event.body);

  return {
    statusCode: 201,
    body: JSON.stringify(result),
  };
};
