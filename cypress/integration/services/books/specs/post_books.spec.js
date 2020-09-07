import * as post_books from '../requests/post_books.request'; //fazer import para funcoes

describe('Books', () => {
    it('Adicionar um novo livro', () => {
        post_books.addBooks().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.Title).to.eq("Inteligencia Emocional");
        })
    });
});