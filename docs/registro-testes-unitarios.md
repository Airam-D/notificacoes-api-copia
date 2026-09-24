# Registro de Testes Unitários
Aluno: Airam D'Avilla Costa
Grupo: 05
Data: 24/09/2026

## Testes escritos
| #   | Arquivo                       | O que o teste verifica                            | Tipo    |
| --- | ----------------------------- | ------------------------------------------------- | ------- |
| 1   | tests/unit/validators.test.js | E-mail válido não retorna erro                    | sucesso |
| 2   | tests/unit/validators.test.js | E-mail sem @ retorna mensagem de erro             | falha   |
| 3   | tests/unit/validators.test.js | Aceita nome com exatamente 3 letras para mínimo 3 | borda   |
| 4   | tests/unit/parseId.test.js    | ID "12abc" deve lançar ValidationError            | falha   |

## Resultado
Passaram: 3 (4 contando com o ambiente.test.js)
Falharam: 1

## Defeito encontrado
Teste: parseId com ID "12abc"
Esperado: Lançar ValidationError por conter caracteres não numéricos.
Obtido: A função converteu parcialmente a string para o número 12 e não lançou o erro esperado.

## Cobertura
% Lines da linha "helpers": 100%
Em uma frase, o que esse número significa: Representa a percentagem de linhas de código das funções utilitárias em helpers que foram efetivamente executadas pela suíte de testes.