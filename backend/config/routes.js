const express = require('express');

const billingCycleService = require('../api/billingCycle/billingCycleService');

module.exports = server => {
  // API Routes
  const router = express.Router();

  server.use('/api', router);

  // Rotas da API
  billingCycleService.register(router, '/billingCycle');
};
