/// <reference types="cypress"/>
const payloadChangeBook = require('../payloads/change-book.json')  //utilizado para acessar o conteudo do arquivo add-book.json

function changeBook(idBook) {
    return cy.request({
        method: 'PUT',
        url: `Books/${idBook}`, //usar crase para concatenar
        headers: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body:  payloadChangeBook
    })
}
// toda funcao precisa ser exportada pra poder ser utilizada dentro do testes
export {changeBook};