const { Router } = require("express");
const router = Router();

router.post(`/api/bodyTest`, (res, req) => {
  //console.log(req.body);
  //const body = req.body;
  //return res.json(body);
  const { username, password } = req.body;
  return res.json({ username, password });
});

module.exports = router;
