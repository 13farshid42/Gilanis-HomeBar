const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const url = `mongodb+srv://admin:admin123!@cluster0-r0sxn.mongodb.net/likor?retryWrites=true&w=majority`;
const multer = require("multer");

/* Find a Drink */
router.post("/filter", (req, res, next) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (error, con) => {
    if (error) throw error;
    const dbo = con.db("likor");
    const answers = req.body;
    console.log("/* Answers: */");
    console.log(answers);
    console.log("/* end Answers */");
    dbo
      .collection("drinks")
      .find(req.body)
      .toArray((err, result) => {
        if (err) throw err;
        console.log("/* Request body */");
        console.log(req.body);
        console.log("/* End Request body */");
        res.send(result);
        con.close();
      });
  });
});

/* Add New Drink */
router.post("/add", (req, res, next) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, con) => {
    /* select database */
    var dbo = con.db("likor");

    dbo.collection("drinks").insertOne(req.body, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("drink added successfully");
      }
    });
  });
});

/* Upload picture into server */
router.post("/uploadpic", (req, res, next) => {
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(
        null,
        Date.now()
          .toString()
          .slice(0, 9) +
          "__" +
          file.originalname
      );
    }
  });

  var upload = multer({ storage: storage }).single("picture");
  upload(req, res, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("file uploaded successfully!");
      res.send("file uploaded successfully");
    }
  });
});

/* Get all Drinks */
router.get("/get", (req, res, next) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, con) => {
    /* select database */
    var dbo = con.db("likor");

    dbo
      .collection("drinks")
      .find({})
      .toArray((err, result) => {
        res.json(result);
        con.close();
      });
  });
});

/* Delete all Drinks with cname: 'CocktailName' */
router.get("/del", (req, res, next) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, con) => {
    /* select database */
    var dbo = con.db("likor");

    dbo
      .collection("drinks")
      .deleteMany({ cname: "CocktailName" }, (err, result) => {
        res.send(result);
        con.close();
      });
  });
});

module.exports = router;
