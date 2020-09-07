import * as get_books from '../requests/get_books.request';  //fazer import para funcoes

describe('Books', () => {
    it('Listar todos os livros', () => {
        get_books.allBooks().should((response) => {
            cy.log(response)
            cy.log(response.status)
            cy.log(response.statusText)
            cy.log(response.body)
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        })
    });
});