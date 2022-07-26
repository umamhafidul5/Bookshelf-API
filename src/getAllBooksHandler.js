const books = require('./books');

const getAllBooks = (req, h) => {
  const { name, reading, finished } = req.query;

  if (name) {
    const indBooks = books.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
    const res = h.response({
      status: 'success',
      data: {
        books: indBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    res.code(200);
    return res;
  }

  if (reading) {
    const indBooks = books.filter((book) => Number(book.reading) === Number(reading));
    const res = h.response({
      status: 'success',
      data: {
        books: indBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    res.code(200);
    return res;
  }

  if (finished) {
    const indBooks = books.filter((book) => Number(book.finished) === Number(finished));
    const res = h.response({
      status: 'success',
      data: {
        books: indBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    res.code(200);
    return res;
  }

  const res = h.response({
    status: 'success',
    data: {
      books: books.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
  res.code(200);
  return res;
};

module.exports = getAllBooks;
