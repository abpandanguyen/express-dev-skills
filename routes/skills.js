var express = require('express');
var router = express.Router();

// Require our skills controller module
const skillsCtrl = require ('../controllers/skills');

// ALl actual paths start with "/skills"

// GET /skills (index functionality aka list all)
router.get('/', skillsCtrl.index);
// GET /skills/new (add new skill)
router.get('/new', skillsCtrl.new);
// GET /skills/:id (show functionality aka show one skill)
router.get('/:id', skillsCtrl.show);
// POST /skills (post the added skill!)
router.post('/', skillsCtrl.create);

module.exports = router;
