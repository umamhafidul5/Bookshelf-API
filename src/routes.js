const addBook = require('./addBookHandler');
const deleteBook = require('./deleteBookHandler');
const getAllBooks = require('./getAllBooksHandler');
const getDetailBook = require('./getDetailBookHandler');
const updateBook = require('./updateBookInfoHandler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,

  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getDetailBook,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBook,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBook,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Halaman tidak ditemukan',
  },
];

module.exports = routes;
