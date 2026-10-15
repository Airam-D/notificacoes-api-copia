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

### Ticket de saída — individual
Responda sozinho. A avaliação somativa é individual.

**Por que os testes de integração usam um banco separado do banco da API?**
Pois os testes de integração podem alterar os dados do banco, e não queremos que isso afete o banco de produção da API. Além disso, ter um banco separado permite que os testes sejam executados em um ambiente controlado, garantindo que os resultados sejam consistentes e previsíveis.

**No Assert, por que buscamos o registro de novo no banco, em vez de conferir o objeto que o service devolveu?**
Porque queremos verificar que a alteração foi persistida no banco de dados, e não apenas no objeto retornado pelo service.

**A rota PUT /participantes/:id responde 200. O que o seu teste do desafio mostrou sobre ela?**
O teste mostrou que a rota responde 200, mas o nome não foi atualizado no banco de dados.