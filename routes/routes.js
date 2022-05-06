const express = require("express");

const router = express.Router();
const books = require("../models/books");
const sales = require("../models/sales");

//Post an Order
router.post("/postOrder", async (req, res) => {
  const data = new sales({
    name: req.body.name,
    address: req.body.address,
    amount: req.body.amount,
    order: req.body.order,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get Books in Paginated way
router.get("/getBooks", (req, res) => {
  try {
    var query = books.find({});
    query.limit(req.body.limit);
    query.skip(req.body.skip);
    query.exec(function (err, docs) {
      res.json(docs);
      if (err) console.log(err);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get sales order by ID
router.get("/getOrder/:id", async (req, res) => {
  try {
    const data = await sales.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// router.post("/postBooks", async (req, res) => {
//   // console.log(req.body);
//   // res.json(req.body);

//   const data = new books({
//     name: req.body.name,
//     author: req.body.author,
//     price: req.body.price,
//     description: req.body.description,
//   });

//   try {
//     const dataToSave = await data.save();
//     res.status(200).json(dataToSave);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

module.exports = router;
