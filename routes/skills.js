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
// GET /skills/:id/edit (edit functionality)
router.get('/:id/edit', skillsCtrl.edit);
// POST /skills (post the added skill!)
router.post('/', skillsCtrl.create);
// DELETE /skills/:id (delete functionality)
router.delete('/:id', skillsCtrl.delete);
// PUT /skills/:id (update functionality)
router.put('/:id', skillsCtrl.update);


module.exports = router;
