"use strict";

const filterService = require("./service/filterService");

module.exports.filter = async (event) => {
  console.log("Evento do SNS recebido com sucesso:", JSON.stringify(event));
  await filterService.filter(event);
  
  return { message: "Filtro preto e branco aplicado com sucesso!", event };
};
