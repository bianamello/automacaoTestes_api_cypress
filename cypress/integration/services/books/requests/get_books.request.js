/// <reference types="cypress"/>

function allBooks() {
    return cy.request({
        method: 'GET',
        url: 'Books', //vai concatenar a baseURL com isso
        failOnStatusCode: false // usa falso para o cypress nao falhar quando vem um status code diferente de 200
    })
}
// toda funcao precisa ser exportada pra poder ser utilizada dentro do testes
export {allBooks};