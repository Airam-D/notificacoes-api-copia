// tests/helpers/limparBanco.js
// Esvazia as tabelas do banco de TESTE. Usado no beforeEach dos testes de integração,
// para que cada teste comece do zero e não dependa do que o teste anterior deixou.
const { Notificacao, Inscricao, Participante, Evento } = require("../../src/models");

// Apaga dos "filhos" para os "pais", respeitando as chaves estrangeiras
async function limparBanco() {
  await Notificacao.destroy({ where: {} });
  await Inscricao.destroy({ where: {} });
  await Participante.destroy({ where: {} });
  await Evento.destroy({ where: {} });
}

module.exports = limparBanco;
