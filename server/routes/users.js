var router = require("express").Router();
var jwt = require("jsonwebtoken");
var env = require("dotenv");
const MongoClient = require("mongodb").MongoClient;
const url = `mongodb+srv://admin:admin123!@cluster0-r0sxn.mongodb.net/test?retryWrites=true&w=majority`;

/* Register User. */
router.post("/add", function(req, res) {
  MongoClient.connect(url, { useUnifiedTopology: true }, (error, con) => {
    if (error) throw error;
    const dbo = con.db("likor");
    const user = req.body;

    dbo.collection("users").insertOne(user, (err, result) => {
      if (err) throw err;
      if (!err) {
        var token = jwt.sign(
          {
            anrede: result.anrede,
            uname: result.uname,
            uvorname: result.uvorname,
            uemailadress: result.uemailadress,
            ugeburstdatum: result.ugeburstdatum
          },
          `${process.env.SECRETKEY}`
        );
        res.status(200).send({ token: token });
      } else {
        res.status(200).send({ msg: "failur" });
      }
      con.close();
    });
  });
});

//check user information in database for login process
router.post("/login", (req, res, next) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, con) => {
    if (err) {
      console.log(err);
    }

    const database = con.db("likor");
    database.collection("users").findOne(
      {
        uemailadress: `${req.body.uemailadress}`,
        upassword: `${req.body.upassword}`
      },
      (err, result) => {
        if (err) {
          console.log(err);
        }

        //if user doesn't exist in database
        if (result === null) {
          res.status(200).send({ msg: "user does not exist" });
        }

        //if user exist in database
        if (result) {
          var token = jwt.sign(
            {
              anrede: result.anrede,
              uname: result.uname,
              uvorname: result.uvorname,
              uemailadress: result.uemailadress,
              ugeburstdatum: result.ugeburstdatum
            },
            `${process.env.SECRETKEY}`
          );
        }
        res.send({ token: token });
        con.close();
      }
    );
  });
});

module.exports = router;
