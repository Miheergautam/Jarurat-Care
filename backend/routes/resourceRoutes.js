const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const validateResource = require("../middleware/validationMiddleware");
const resourceController = require("../controllers/resourceController");

const router = express.Router();

router.post('/create', authMiddleware, roleMiddleware(['admin']),validateResource,resourceController.createResource);
router.get('/all', authMiddleware,resourceController.getAllResource);
router.get('/byId/:id', authMiddleware,resourceController.getResource);
router.delete('/delete/:id',authMiddleware, roleMiddleware(['admin']),resourceController.deleteResource);
router.put('/update/:id',authMiddleware, roleMiddleware(['admin']),resourceController.updateResource);


module.exports = router;

//Done Testing