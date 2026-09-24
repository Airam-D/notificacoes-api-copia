// 1. Importação das funções necessárias
const { isEmail, minLength } = require("../../src/helpers/validators");

// Testes anteriores do isEmail (secção 2.2)
describe("validators.isEmail", () => {
    it("não retorna erro para um e-mail válido", () => {
        const email = "ana@senai.br";
        const resultado = isEmail(email);
        expect(resultado).toBeNull();
    });

    it("retorna mensagem de erro para e-mail sem @", () => {
        const resultado = isEmail("ana.senai.br");
        expect(resultado).toBe("E-mail inválido");
    });
});

// 2.3 Teste 3: Caso de borda para a função minLength
describe("validators.minLength", () => {
    it("aceita um nome com exatamente 3 letras quando o mínimo é 3", () => {
        // Arrange: prepara os dados de entrada
        const valor = "Ana";
        const minimo = 3;
        const nomeCampo = "nome";

        // Act: executa a função a testar[cite: 1]
        const resultado = minLength(valor, minimo, nomeCampo);

        // Assert: verifica se o resultado é null (sem erro)[cite: 1]
        expect(resultado).toBeNull();
    });
});