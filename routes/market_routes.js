const express = require('express');
const router = express.Router();
const { create_market, requestMain } = require('../controllers/market_controller');

// Market rotaları
router.post('/create', create_market);
router.post('/:marketId/request-product', requestMain);

module.exports = router;
