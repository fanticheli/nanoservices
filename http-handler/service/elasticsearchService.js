const elasticsearch = require("elasticsearch");
const client = new elasticsearch.Client({
  host: "https://vpc-elasticsearch-cluster-4qo4mmzsj3d4ofiuqzmm2ouaf4.us-east-2.es.amazonaws.com",
});

const search = async (query) => {
  return await client.search({
    index: "imagens",
    q: "tags:" + query,
  });
};

module.exports = {
  search,
};
