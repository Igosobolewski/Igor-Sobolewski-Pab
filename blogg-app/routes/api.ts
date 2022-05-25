import express from 'express';
const router = express.Router();

const testController = require('../controllers/api/test');

router.get('/', testController);
module.exports = router;
