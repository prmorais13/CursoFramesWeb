const BillingCycle = require('../models/billingCycle');
const _ = require('lodash');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.after('post', sendErrorOrNext).after('put', sendErrorOrNext);

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] });
    } else {
      res.json({ value });
    }
  });
});

function sendErrorOrNext(req, res, nex) {
  const bundle = res.locals.bundle;

  if (bundle.errors) {
    let errors = parserErrors(bundle.errors);
    res.status(500).json({ errors });
  } else {
    next();
  }
}

function parserErrors(nodeRestfulErrors) {
  const errors = [];
  _.forIn(nodeRestfulErrors, error => errors.push(error.message));
  return errors;
}

module.exports = BillingCycle;
