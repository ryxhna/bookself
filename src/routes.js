const { addBook, getAllBook, getBook, editBook, deleteBook, } = require('./handler');

const routes = [{
        // Kriteria 3
        method: 'POST',
        path: '/books',
        handler: addBook,
    },
    {
        // Kriteria 4
        method: 'GET',
        path: '/books',
        handler: getAllBook,
    },
    {
        // Kriteria 5
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBook,
    },
    {
        // Kriteria 6
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBook,
    },
    {
        // Kriteria 7
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBook,
    },
];

module.exports = routes;