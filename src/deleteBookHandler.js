const books = require('./books');

const deleteBook = (req, h) => {
  const { bookId } = req.params;
  const index = books.findIndex((book) => book.id === bookId);

  if (index === -1) {
    const res = h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    });
    res.code(404);
    return res;
  }
  books.splice(index, 1);
  const res = h.response({
    status: 'success',
    message: 'Buku berhasil dihapus',
  });
  res.code(200);
  return res;
};

module.exports = deleteBook;
