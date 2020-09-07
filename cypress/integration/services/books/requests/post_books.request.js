/// <reference types="cypress"/>
const payloadAddBooks = require('../payloads/add-book.json')  //utilizado para acessar o conteudo do arquivo add-book.json

function addBooks() {
    return cy.request({
        method: 'POST',
        url: 'Books', //vai concatenar a baseURL com isso
        failOnStatusCode: false, // usa falso para o cypress nao falhar quando vem um status code diferente de 200
        body: payloadAddBooks
    })
}
// toda funcao precisa ser exportada pra poder ser utilizada dentro do testes
export {addBooks};