const books = require('./books');

const getDetailBook = (req, h) => {
  const { bookId } = req.params;
  const book = books.filter((elBook) => elBook.id === bookId)[0];
  if (book) {
    const res = h.response({
      status: 'success',
      data: {
        book,
      },
    });
    res.code(200);
    return res;
  }
  const res = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  res.code(404);
  return res;
};

module.exports = getDetailBook;
