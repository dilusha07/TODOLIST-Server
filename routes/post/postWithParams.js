// const express = require("express")
// const router = express.Router();

const { Router } = require("express");

const router = Router();

router.post(`/postAPI/:SENO`, (req, res) => {
  const seNum = req.params.SENO;
  return res.json(seNum);
});

module.exports = router;
