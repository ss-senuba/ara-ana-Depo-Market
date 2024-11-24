const express = require('express');
const router = express.Router();
const { createSub_depo, requestMain } = require('../controllers/sub_depo_controller.js');

// Alt depo rotaları
router.post('/create', createSub_depo);
router.post('/:subWarehouseId/request', requestMain);

module.exports = router;
