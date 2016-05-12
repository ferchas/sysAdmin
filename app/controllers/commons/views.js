var express = require('express'),
  router = express.Router();

router.get('/views/:categori/:themName',function(req, res) {
  console.log("entrooooooooo",req.params.themName, req.params.categori);
  res.render(req.params.categori+'/'+ req.params.themName);
});

module.exports = router;
