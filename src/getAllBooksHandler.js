const books = require('./books');

const getAllBooks = (req, h) => {
  const { name: qName, reading, finished } = req.query;
  let data = books;
  if (qName) {
    data = data.filter((x) => x.name.toLowerCase().includes(qName.toLowerCase()));
  }
  if (reading) {
    data = data.filter((x) => Number(x.reading) === Number(reading));
  }
  if (finished) {
    data = data.filter((x) => Number(x.finished) === Number(finished));
  }
  const res = h.response({
    status: 'success',
    data: {
      books: data.map((book) => ({
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
