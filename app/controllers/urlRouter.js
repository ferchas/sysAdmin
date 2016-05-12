var express = require('express'),
  router = express.Router(),
  configThemes   = require('../helpers/configThemes');

//set root url
// router.use('/'+global.config._path+'/airline', require('./airline'));

// get themes html
router.use(require('./commons/views'));


// default
router.get('/*',
	function(req, res) {
		var params = {
			// menuModules: req.modules,
			// configThemes: JSON.stringify(req.configThemes),
  		public_path: "/"+global.config._path,
  		public_path_api:  "/"+global.config._pathApi,
  	};
  res.render('index',params);
});


module.exports = router;
