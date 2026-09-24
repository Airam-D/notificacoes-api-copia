// tests/setup.js
// O Jest executa este arquivo antes de cada arquivo de teste (ver "setupFiles" no package.json).
// Ele carrega as variáveis do BANCO DE TESTE, que ficam no .env.test — nunca no .env.
require("dotenv").config({ path: ".env.test", quiet: true });
