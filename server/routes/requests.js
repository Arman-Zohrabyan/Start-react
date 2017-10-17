const express = require('express');
var fs = require("fs");
const router = new express.Router();

router.post('/getAll', (req, res) => {
  const db = JSON.parse( fs.readFileSync("./server/public/db/data.json", "utf8") );
  return res.status(200).json(db).end();
});

router.post('/addNew', (req, res) => {
  let db = JSON.parse( fs.readFileSync("./server/public/db/data.json", "utf8") ), newData = {};
  Object.keys(req.body).forEach( k => {
    const key = k.match(/\[(\w*)\]/)[1];
    newData[key] = req.body[k];
  });
  db.push(newData);
  fs.writeFileSync("./server/public/db/data.json", JSON.stringify(db), "utf8");
  return res.status(200).json([]).end();
});

router.post('/remove', (req, res) => {
  let db = JSON.parse( fs.readFileSync("./server/public/db/data.json", "utf8") );
  var keys = Object.keys(req.body).reverse();
  keys.forEach( k => {
    db.splice(req.body[k], 1);
  });
  fs.writeFileSync("./server/public/db/data.json", JSON.stringify(db), "utf8");
  return res.status(200).json(db).end();
});

module.exports = router;
