var express = require('express');
var router = express.Router();

// Require our skills controller module
const skillsCtrl = require ('../controllers/skills');

// ALl actual paths start with "/skills"

// GET /skills (index functionality aka list all)
router.get('/', skillsCtrl.index);
// GET /skills/:id (show functionality aka show one skill)
router.get('/:id', skillsCtrl.show);

module.exports = router;
