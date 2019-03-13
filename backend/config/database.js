const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/db_finance', {
  useNewUrlParser: true
});

mongoose.Error.messages.general.required = "O campo '{PATH}' é obrigatório!";
