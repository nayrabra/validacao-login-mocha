# Testes Unitários com Mocha - Validação de Login

Este projeto utiliza o **Mocha** e o **Node.js Assert** para realizar testes unitários em uma funcionalidade de autenticação de usuários.

O principal objetivo é validar diferentes cenários de login, verificando:

- Usuário válido
- Credencial expirada
- Usuário não encontrado
- Senha incorreta

---

## Tecnologias Utilizadas

* Node.js
* Mocha
* JavaScript
* Node Assert

---

## Estrutura do Projeto

```bash
├── src
│   └── login.js
├── test
│   └── login.test.js
├── .gitignore
├── package-lock.json
├── package.json
```

---

## Regra de Negócio

A função `realizarLogin()` recebe:

* Email
* Senha
* Expirado

O sistema percorre uma lista pré-definida de usuários contendo:

- id
- nome
- email
- senha
- expirado

---

## Fluxo da Validação

O sistema:

* Retorna `"Login realizado com sucesso"` quando o usuário possui email, senha e credenciais válidas.
* Retorna `"Renove suas credenciais"` quando o usuário válido possui credenciais expiradas.
* Retorna `"Usuário não encontrado"` quando o email informado não existe.
* Retorna `"Senha incorreta para o usuário encontrado"` quando o email existe, mas a senha está incorreta.

---

## Cenários de Teste Implementados

### Cenários Positivos

* Autenticação realizada com sucesso utilizando email e senha válidos com `expirado` igual a `false`

### Cenários Negativos

* Credencial expirada
* Usuário não encontrado
* Senha incorreta para usuário existente

---

## Exemplo da Função

```javascript
realizarLogin('nayra@email.com', '123456');
```

Resultado esperado:

```bash
Login realizado com sucesso
```

---

## Como Executar os Testes

> É necessário ter o Node.js instalado.

Inicialize o projeto:

```bash
npm init -y
```

No arquivo `package.json`, altere:

```json
"type": "commonjs"
```

para:

```json
"type": "module"
```

Instale o Mocha:

```bash
npm install mocha
```

ou:

```bash
npm i mocha
```

---

## Executando os Testes

Execute os testes com o comando:

```bash
npx mocha
```

---

## Sobre os Testes

Os testes unitários foram desenvolvidos utilizando:

* `describe()` para agrupar suítes de testes
* `it()` para definir casos de teste
* `assert.equal()` para validação dos resultados

O projeto tem como foco validar a funcionalidade de login através de testes automatizados, cobrindo diferentes cenários de autenticação de usuários e validação de credenciais expiradas.

---

## Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

- Prática de lógica de programação
- Estruturação de testes unitários
- Validação de regras de negócio
- Aprendizado de automação de testes com Mocha
- Organização de código em JavaScript
