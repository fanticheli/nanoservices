const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

AWS.config.update({ region: "us-east-2" });

const s3 = new AWS.S3();

const BUCKET = "nanoservices-images-fen";

const upload = (body) => {
  const id = uuidv4();
  return new Promise((res, rej) => {
    s3.putObject(
      {
        Bucket: BUCKET,
        Key: id + ".jpg",
        Body: new Buffer(
          body.replace(/^data:image\/\w+;base64,/, ""),
          "base64"
        ),
        ContentEncoding: "base64",
        ContentType: "image/jpeg",
      },
      (err) => {
        if (err) {
          return rej(err);
        }
        return res({
          bucket: BUCKET,
          key: id + ".jpg",
        });
      }
    );
  });
};

module.exports = {
  upload,
};
