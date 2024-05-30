const { nanoid } = require('nanoid');
const books = require('./books');


// KRITERIA 3 - DONE - POST //
// Membuat fungsi baru yang dapat menyimpan buku
const addBook = (request, h) => {
    // Menyimpan objek buku pada server 
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
    const id = nanoid(25);

    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = pageCount === readPage;

    const newBook = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        insertedAt,
        updatedAt,
    };

    if (!name) {
        // Jika client tidak melampirkan properti name pada request body
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;

    }
    if (readPage > pageCount) {
        // Jika client melampirkan nilai properti readPage yang lebih besar dari nilai properti pageCount
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;

    }

    books.push(newBook);
    const isSuccess = books.find((book) => book.id === id);

    if (isSuccess) {
        // Jika buku berhasil ditambahkan
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
            },
        });
        response.code(201);
        return response;

    }
    const response = h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku',
    });
    response.code(404);
    return response;
};

// KRITERIA 4 - DONE (Datanya minimal 2 --> POST 2x baru GET) - TINGGAL YG OPSIONAL
const getAllBook = (request, h) => {
    const { name, reading, finished } = request.query;

    if (!name && !reading && !finished) {
        const response = h.response({
            status: 'success',
            data: {
                books: books.map((book) => ({
                    id: book.id,
                    name: book.name,
                    publisher: book.publisher,
                })),
            },
        })
        response.code(200);
        return response;
    }

    if (name) {
        const filteredBooksName = books.filter((book) => {
            const nameRegex = new RegExp(name, 'gi');
            return nameRegex.test(book.name);
        });

        return h
            .response({
                status: 'success',
                data: {
                    books: filteredBooksName.map((book) => ({
                        id: book.id,
                        name: book.name,
                        publisher: book.publisher,
                    })),
                },
            })
            .code(200);
    }

    if (reading) {
        const filteredBooksReading = books.filter(
            (book) => Number(book.reading) === Number(reading),
        );

        return h
            .response({
                status: 'success',
                data: {
                    books: filteredBooksReading.map((book) => ({
                        id: book.id,
                        name: book.name,
                        publisher: book.publisher,
                    })),
                },
            })
            .code(200);

    }

    const filteredBooksFinished = books.filter(
        (book) => Number(book.finished) === Number(finished),
    );

    return h
        .response({
            status: 'success',
            data: {
                books: filteredBooksFinished.map((book) => ({
                    id: book.id,
                    name: book.name,
                    publisher: book.publisher,
                })),
            },
        })
        .code(200);

};

// KRITERIA 5 - DONE (GET DETAIL FIXX)
// Membuat fungsi baru untuk menampilkan detail buku yang disimpan berdasarkan id
const getBook = (request, h) => {
    const { bookId } = request.params;
    const book = books.filter((bookSearch) => bookSearch.id === bookId)[0];
    /** console.log(book);
        console.log(bookId); // nyimpen id
        console.log(books);  // apakah udh nyimpen apa blm
    */
    if (!book) {
        const response = h.response({
            status: 'fail',
            message: 'Buku tidak ditemukan',
        });
        response.code(404);
        return response;
    }
    const response = h.response({
        status: 'success',
        data: {
            book: {
                id: book.id,
                name: book.name,
                year: book.year,
                author: book.author,
                summary: book.summary,
                publisher: book.publisher,
                pageCount: book.pageCount,
                readPage: book.readPage,
                finished: book.finished,
                reading: book.reading,
                insertedAt: book.insertedAt,
                updatedAt: book.updatedAt,
            },
        },
    });
    response.code(200);
    return response;
};

// KRITERIA 6 - DONE (POST dulu baru PUT) //
// Membuat fungsi baru agar dapat mengubah data buku
// kayanya yg bermasalah dari scriptnya (?)
const editBook = (request, h) => {
    const { bookId } = request.params;
    const { name, year, author, summary, publisher, pageCount, readPage, reading, } = request.payload;
    const check = books.findIndex((book) => book.id === bookId);

    if (!name) {
        // Jika client tidak melampirkan properti name pada request body
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;

    } else if (readPage > pageCount) {
        // Jika client melampirkan nilai properti readPage yang lebih besar dari nilai properti pageCount
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;

    } else if (check === -1) {
        // Jika Id yang dilampirkan oleh client tidak ditemukkan oleh server
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Id tidak ditemukan',
        });
        response.code(404);
        return response;

    } else {
        // Bila buku berhasil diperbarui
        const finished = pageCount === readPage
        books[check] = {
            ...books[check],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            finished
        };
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui',
        });
        response.code(200);
        return response;
    }
};

// KRITERIA 7 - DONE (GET dulu baru DELETE)
// Membuat fungsi baru untuk menghapus buku
const deleteBook = (request, h) => {
    // bukan pake id tapi bookId --> sesuaiin sm endpoint
    const { bookId } = request.params;
    /*  buat tracking ada value apa ngga
        console.log(bookId);
        bukan pake id tapi bookId --> sesuaiin sm endpoint
    */
    const index = books.findIndex((book) => book.id === bookId);

    if (index !== -1) {
        books.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil dihapus',
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan',
    });
    response.code(404);
    return response;
};

module.exports = { addBook, getAllBook, getBook, editBook, deleteBook };