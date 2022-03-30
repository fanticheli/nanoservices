"use strict";

const rekognitionService = require("./service/rekognitionService");

module.exports.tag = async (event) => {
  const s3Info = JSON.parse(event.Records[0].Sns.Message);
  const bucket = s3Info.Records[0].s3.bucket.name;
  const key = s3Info.Records[0].s3.object.key;

  const labels = await rekognitionService.detectLabels(bucket, key);

  console.log("LABELS", labels);

  return {
    message: "Go Serverless v1.0! Your function executed successfully!",
    event,
  };
};
