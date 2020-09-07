/// <reference types="cypress"/>

function deleteBook(idBook) {
    return cy.request({
        method: 'DELETE',
        url: `Books/${idBook}`, //usar crase para concatenar
        failOnStatusCode: false // usa falso para o cypress nao falhar quando vem um status code diferente de 200
    })
}
// toda funcao precisa ser exportada pra poder ser utilizada dentro do testes
export {deleteBook};