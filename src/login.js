// Orientações: Pré-requisitos:
// Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: id, nome, email, senha e expirado (boleano, pode ser true ou false). 
// Adicione ao menos um dos usuarios como expirado sendo true.

// Desafio: Construa uma função para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso
// caso exista um usuário com email e senha iguais aos informados. A função deve dizer que as credenciais expiraram caso expirado for true. 
// A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.

// Testes:
// Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuário não encontrado e 4) Senha incorreta para o usuário encontrado

// Exemplo:
// fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
// fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> 'Renove suas credenciais'


/*
    1. Entradas (O que é informado)
    - id
    - nome
    - email
    - senha
    - expirado

    2. Regras (Regras quanto ao que foi informado, não são regras de negócio)
    - expirado deve ser boleano
    - pelo menos um usuário deve ter a opção expirado como true

    3. Processamento (Como o computador deve tomar decisões)
    - Se encontrar um usuário com email e senha iguais aos informados e a opçao expirado como false, retornar "Login realizado com sucesso"
    - Se o usuário tiver o email e senha corretos, porém a credencial expirada como true, retorne "Renove suas credenciais"
    - Se o usuário não tiver o email cadastrado retorne "Usuário não encontrado"
    - Se o usuário tiver o email cadastrado, porém a senha incorreta, retorne "Senha incorreta para o usuário encontrado"

    4. Saídas (O que o computador deve trazer como resposta)
    - "Login realizado com sucesso" ou "Renove suas credenciais" ou "Usuário não encontrado" ou "Senha incorreta para o usuário encontrado"
   
*/

const usuarios = [
    {   
        id: 1,
        nome: 'Nayra',
        email: 'nayra@email.com',
        senha: '123456',
        expirado: false
    },
    {
        id: 2,
        nome: 'Julio',
        email: 'julio@email.com',
        senha: '654321',
        expirado: false
    },
    {
        id: 3,
        nome: 'Bruna',
        email: 'bruna@email.com',
        senha: 'senha123',
        expirado: true  
    },
    {
        id: 4,
        nome: 'Joaquim',
        email: 'joaquim@email.com',
        senha: 'senha123456',
        expirado: true  
    },
    {
        id: 5,
        nome: 'Otto',
        email: 'otto@email.com',
        senha: 'senha123!',
        expirado: true  
    },
    {
        id: 6,
        nome: 'Luiza',
        email: 'luiza@email.com',
        senha: '123luiza',
        expirado: false  
    },
    {
        id: 7,
        nome: 'Benicio',
        email: 'benicio@email.com',
        senha: '123senha!',
        expirado: false  
    }
    
];

export function realizarLogin(email, senha) {


    for (let usuario of usuarios) {

        if (usuario.email == email && usuario.senha == senha && usuario.expirado == false) {
           return 'Login realizado com sucesso';
        }

        if (usuario.email == email && usuario.senha == senha && usuario.expirado == true) {
            throw new Error ('Renove suas credenciais');
        }

        if (usuario.email == email && usuario.senha != senha) {
            throw new Error ('Senha incorreta para o usuário encontrado');
        }
    }
     throw new Error('Usuário não encontrado');
}