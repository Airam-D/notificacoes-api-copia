# Registro de Testes de Endpoint

Aluno: Airam D' Avilla Costa
Grupo: João Marcelo e Airam D' Avilla Costa

## Testes escritos

| #   | Verbo e rota     | Com token? | Status esperado | Verde ou vermelho? |
| --- | ---------------- | ---------- | --------------- | ------------------ |
| 1   | POST /eventos    | Sim        | 201             | Verde              |
| 2   | GET /eventos/:id | Não        | 404             | Verde              |
| 3   | GET /eventos/:id | Não        | 400             | Vermelho           |

## Resultado

Linha "Tests:" da saída do npm run test:endpoint: Tests: 1 failed, 4 passed, 5 total

## Defeito encontrado

Teste: responde 400 quando o id tem letras (GET /eventos/:id)
Esperado: 400
Obtido: 200
Em qual aula esse mesmo defeito já tinha aparecido, e como: Apareceu na Aula 04 (testes unitários), na função parseId("12abc"), que ignorava as letras após os números e devolvia 12 em vez de dar erro.

# Ticket de Saída — Testes de Endpoint (Aula 06)
---

### 1. Olhando o código de um teste, como você sabe que ele é de endpoint e não de integração?

* **Pela forma de chamar a aplicação:** O teste de endpoint utiliza o Supertest por meio de `request(app)` para simular uma requisição HTTP completa (como `request(app).post("/eventos")`), enquanto o teste de integração chama diretamente um método da camada de *service* (como `EventoService.criar(...)`).
* **Pelo que ele valida:** O teste de endpoint confere o **código de status HTTP** e o **JSON** retornado na resposta, ao passo que o teste de integração verifica o estado dos dados diretamente no banco de dados.

---

### 2. O usuário de verdade sempre manda o token. Então por que testar a rota protegida sem token?

* **Para garantir a segurança da API:** Se alguém remover o middleware de autenticação (`authMiddleware`) da rota por engano, os testes que enviam um token válido continuam passando normalmente, mas a rota ficaria aberta para qualquer pessoa criar ou alterar registros sem estar autenticada.
* **Para detectar falhas de proteção:** Apenas o teste sem token (que exige o retorno de status `401`) ficará vermelho e avisará imediatamente que a rota perdeu a proteção.

---

### 3. O que o seu teste do desafio mostrou sobre a API?

* **Que o defeito da Aula 04 chega até a camada HTTP:** Ao fazer uma requisição `GET` enviando um ID inválido misturado com letras (como `/eventos/5abc`), a API não bloqueia a entrada com erro `400` (*Bad Request*).
* **Que a API retorna dados indevidamente:** Por conta do comportamento da função `parseId`, a aplicação ignora as letras após o número, aceita apenas o dígito inicial e responde com status `200`, entregando o evento correspondente ao número.