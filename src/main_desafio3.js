//########################################################################
// Desafio 3 - Exercio 1


//Reescrever trechos de códigos

// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));


/* function umPorSegundo() {
 delay().then(() => {
 console.log('1s');
 delay().then(() => {
 console.log('2s');
 delay().then(() => {
 console.log('3s');
 });
 })
 });
} */

async function umPorSegundo() {
    var response = await delay();
    console.log('1s');
    response = await delay();
    console.log('2s');
    response = await delay();
    console.log('3s');
}

umPorSegundo();

//########################################################################
// Desafio 3 - Exercio 2

import axios from 'axios';

/* function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
    
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Usuário não existe');
 })
} */

async function getUserFromGithub(user) {   
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.log('Usuário não existe');
    }

}

getUserFromGithub('rocketseat');
getUserFromGithub('diego3g124123');

//########################################################################
// Desafio 3 - Exercio 3

/* class Github {
    static getRepositories(repo) {
    axios.get(`https://api.github.com/repos/${repo}`)
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Repositório não existe');
    })
    }
   } */

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        }
        catch (err) {
            console.log('Repositório não existe');
        }        
    }
}

Github.getRepositories('Rocketseat/academy-facebook-auth');
Github.getRepositories('Rocketseat/dslkvmskv');

//########################################################################
// Desafio 3 - Exercio 4

/* class Github {
    static getRepositories(repo) {
    axios.get(`https://api.github.com/repos/${repo}`)
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Repositório não existe');
    })
    }
   } */

const buscaUsuario = async (usuario) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log('Cheguei');
        console.log(response.data);
    } catch (err) {
        console.log('Cheguei erro');
        console.log('Usuário não existe');
    } 
}
   
 buscaUsuario('perego86');



