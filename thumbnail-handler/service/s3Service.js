const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-2" });

const BUCKET = "nanoservices-images-thumbnail-fen";

const s3 = new AWS.S3();

const getObject = (bucket, key) => {
  return new Promise((res, rej) => {
    s3.getObject(
      {
        Bucket: bucket,
        Key: key,
      },
      (err, data) => {
        if (err) {
          return rej(err);
        }
        return res(data.Body);
      }
    );
  });
};

const putObject = (buffer, filename) => {
  return new Promise((res, rej) => {
    s3.putObject(
      {
        Bucket: BUCKET,
        Key: filename,
        Body: buffer,
      },
      (err, data) => {
        if (err) {
          return rej(err);
        }
        return res({
          bucket: BUCKET,
          Key: filename,
        });
      }
    );
  });
};

module.exports = {
  getObject,
  putObject,
};
