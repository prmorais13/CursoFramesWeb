const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/db_finance', {
  useNewUrlParser: true
});

mongoose.Error.messages.general.required = "O campo '{PATH}' é obrigatório!";
mongoose.Error.messages.Number.min =
  "O valor '{VALUE}' informado é menor que o limite mínimo de '{MIN}'!";
mongoose.Error.messages.Number.max =
  "O valor '{VALUE}' informado é maior que o limite máximo de '{MAX}'!";
mongoose.Error.messages.String.enum =
  "O valor '{VALUE}' não é válido para o atributo'{PATH}'!";
