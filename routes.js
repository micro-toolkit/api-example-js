var express = require('express'),
    router = express.Router();

router.get('/', function(req, res){
  res.json({ status: "API is running properly..." });
});

module.exports = router;
