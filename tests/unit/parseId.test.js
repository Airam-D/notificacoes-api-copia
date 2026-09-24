const parseId = require("../../src/helpers/parseId");
const { ValidationError } = require("../../src/errors/AppError");

describe("parseId", () => {
    // Teste base fornecido[cite: 1]
    it("lança ValidationError quando o id não é número", () => {
        expect(() => parseId("abc")).toThrow(ValidationError);
    });

    // Teste 4 (Desafio): "12abc" não deve ser aceite como ID válido[cite: 1]
    it("lança ValidationError quando o id contém caracteres não numéricos misturados", () => {
        expect(() => parseId("12abc")).toThrow(ValidationError);
    });
});