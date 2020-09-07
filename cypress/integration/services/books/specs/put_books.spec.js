import * as put_books from '../requests/put_books.request';  //fazer import para funcoes
import * as get_books from '../requests/get_books.request';  //fazer import para funcoes
import * as post_books from '../requests/post_books.request';

describe('Books', () => {
    it('Alterar um livro', () => {
        get_books.allBooks().then((resAllBokks) => {     //Executa o GET pra poder pegar o ID
            const id = (resAllBokks.body[0].ID)          //Grava o ID em uma variavel
            put_books.changeBook(id).should((resChangeBook) => {  // passa o ID para o delete
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body.Title).to.eql('Livro Alterado');
            })
        })
    });
});