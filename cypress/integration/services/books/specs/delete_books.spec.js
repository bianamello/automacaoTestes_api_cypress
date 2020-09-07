import * as delete_books from '../requests/delete_books.request';  //fazer import para funcoes
import * as get_books from '../requests/get_books.request';  //fazer import para funcoes
import * as post_books from '../requests/post_books.request';

describe('Books', () => {
    it('Deletar um livro', () => {
        get_books.allBooks().then((resAllBokks) => {     //Executa o GET pra poder pegar o ID
            const id = (resAllBokks.body[0].ID)          //Grava o ID em uma variavel
            delete_books.deleteBook(id).should((resDeleteBook) => {  // passa o ID para o delete
                expect(resDeleteBook.status).to.eq(200);
            })
        })
    });
});

describe('Books', () => {
    it('Criar e Deletar', () => {
        post_books.addBooks().then((resAddBook) => {   //executa o POST
            delete_books.deleteBook(resAddBook.body.ID).should((resDeleteBook) => {   //passa o ID do resultado do POST para o delete
                expect(resDeleteBook.status).to.eq(200);
            })
        })
    });
});