# Registro de Testes de Integração

Aluno: Airam D' Avilla Costa
Grupo: Grupo 5
Data: 15/10/2026

## Banco de teste

Nome do banco de teste: notificacoes_test
Por que ele é separado do banco da API (uma frase): Para evitar impacto nos dados reais da aplicação durante os testes.

## Testes escritos

| #   | Arquivo | O que o teste verifica | Verde ou vermelho? |
| --- | ------- | ---------------------- | ------------------ |
| 1   |    tests/integration/evento.integration.test.js     |            grava o evento no banco com o nome correto            |          Verde          |
| 2   |    tests/integration/participante.integration.test.js     |            grava o participante no banco com nome e e-mail corretos            |          Verde          |
| 3   |    tests/integration/participante.integration.test.js     |            não grava dois participantes com o mesmo e-mail            |          Vermelho          |

## Resultado

Linha "Tests:" da saída do npm run test:integration: Tests:       1 failed, 5 passed, 6 total

## Defeito encontrado

Teste: não grava dois participantes com o mesmo e-mail
Esperado: erro de validação

Obtido: erro de integridade do banco de dados

O que o usuário da API veria (a rota responde 200, mas...): erro 400 com mensagem de erro de validação