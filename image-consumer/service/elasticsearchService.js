const elasticsearch = require("elasticsearch");
const client = new elasticsearch.Client({
  host: "https://vpc-elasticsearch-cluster-4qo4mmzsj3d4ofiuqzmm2ouaf4.us-east-2.es.amazonaws.com",
});

const index = async (documento) => {
  return await client.index({
    index: "imagens",
    type: "object",
    body: documento,
  });
};

module.exports = {
  index: index,
};
