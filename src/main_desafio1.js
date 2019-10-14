import { constants } from "buffer";


// Desafio 1 - Exercio 1
// Cria uma classe Usuario
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha
        this.admin = false;
    }

    isAdmin() {
        return (this.admin === true)
    }
 }

 class Admin extends Usuario {
    constructor(email, senha) {
        super(email,senha);
        this.admin = true;
    }    
 }


const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

//########################################################################
// Desafio 1 - Exercio 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

// Utilizando Map
var idades = usuarios.map((item) => item.idade)
console.log(idades);

var usuarios_rocketseat = usuarios.filter((item) => item.empresa ==='Rocketseat')
console.log(usuarios_rocketseat);

//var usuarios_google = usuarios.filter((item) => item.empresa ==='Google')
//console.log(usuarios_google);

var usuarios_menor50 = usuarios.map((item) => ({nome: item.nome, idade: item.idade*2 ,empresa: item.empresa})).filter((item) => item.idade <= 50)

console.log(usuarios_menor50);

//########################################################################
// Desafio 1 - Exercio 3

// 3.1

/* const arr = [1, 2, 3, 4, 5];

const arrNew = arr.map(item => item +10);
console.log(arrNew);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
//mostraIdade(tstusuario) = ((usuario)  =>  tstusuario.idade);
const mostraIdade = (usuario) => (usuario.idade);

console.log(mostraIdade(usuario)); */

   
// 3.3
// Dica: Utilize uma constante pra function
/* const nome = "Diego";
const idade = 23;

const mostraUsuario =(nome = 'Diego', idade = 18) => ({nome , idade})

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); */

// 3.4
const promise = () => ( new Promise((resolve, reject) => (resolve())));
    

//########################################################################
// Desafio 1 - Exercio 4

// 4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

const {nome, endereco: { cidade,estado} } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);


//4.2
function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
   }

console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

//########################################################################
// Desafio 1 - Exercio 5

// 5.1 REST

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

// 5.2 SPREAD

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
        }
    };

const usuario2 = { ...usuario1, nome: 'Gabriel'}
const usuario3 = { ...usuario1, endereco: { ...usuario1.endereco,cidade: 'Lontras'}}

console.log(usuario1);
console.log(usuario2);
console.log(usuario3);

//########################################################################
// Desafio 1 - Exercio 6

const usuario = 'Diego';
const idade = 23;

//console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
console.log(`O usuário ${usuario} possui ${idade} anos`);

//########################################################################
// Desafio 1 - Exercio 7

const nome5 = 'Diego';
const idade5 = 23;

const usuario4 = {
    nome5,
    idade5,
    cidade: 'Rio do Sul',
}

console.log(usuario4);