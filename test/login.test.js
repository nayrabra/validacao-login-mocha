import { realizarLogin } from "../src/login.js";
import assert from "node:assert";

describe("Testes do Módulo de Login", () => {
  describe("Testes da Função realizarLogin", () => {
    it('Deve retornar "Login realizado com sucesso" quando o usuário com login e senha fornecidos forem encontrados e expirado for false', function () {
      // Act
      const resultado = realizarLogin("nayra@email.com", "123456");

      // Assert
      assert.equal(resultado, "Login realizado com sucesso");
    });

    it('Deve retornar "Renove suas credenciais" quando o usuário com login e senha fornecidos forem encontrados mas expirado for true', function () {
      assert.throws(
        function () {
          realizarLogin("otto@email.com", "senha123!");
        },
        {
          message: "Renove suas credenciais",
        },
      );
    });

    it('Deve retornar "Usuário não encontrado" quando o usuário tiver email inválido', function () {
      assert.throws(
        function () {
          realizarLogin("julio.lima");
        },
        {
          message: "Usuário não encontrado",
        },
      );
    });

    it('Deve retornar "Senha incorreta para o usuário encontrado" quando o usuário tiver email válido porém a senha incorreta', function () {
      assert.throws(
        function () {
          realizarLogin("benicio@email.com", "senha456");
        },
        {
          message: "Senha incorreta para o usuário encontrado",
        },
      );
    });
  });
});
