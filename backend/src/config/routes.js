const express = require('express');

const billingCycleService = require('../api/services/billingCycleService');
const billingSummaryService = require('../api/services/billingSummaryService');

module.exports = server => {
  // API Routes
  const router = express.Router();

  server.use('/api', router);

  // Rotas da API
  billingCycleService.register(router, '/billingCycle');

  router.route('/summary').get(billingSummaryService.getSummary);
};
