const { name, reading, finished } = request.query;
/*  console.log(name);
    console.log(reading);
    console.log(finished);
*/
if (name !== undefined) { // null buat objek
    // nyari data yg penting ada .include
    const iniNama = books.filter((bookSearch) => bookSearch.name.toLowerCase().includes(name.toLowerCase())); //[0] diapus krn bakal lebih dr satu
    // books difiler -> taro di iniNama -> trs dipanggil di allBooks
    const allBooks = iniNama.map(book => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
    }));
    const response = h.response({
        status: 'success',
        data: {
            books: allBooks,
        },
    });
    response.code(200);
    return response;
}

if (reading !== undefined) {
    let value = false;
    if (reading === 0) {
        value = false;
    } else if (reading === 1) {
        value = true;
    }
    const iniNama = books.filter((bookSearch) => bookSearch.reading === value); //[0] diapus krn bakal lebih dr satu
    const allBooks = iniNama.map(book => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
    }));
    const response = h.response({
        status: 'success',
        data: {
            books: allBooks,
        },
    });
    response.code(200);
    return response;
}

if (finished !== undefined) {
    let value = false;
    if (finished === 0) {
        value = false;
    } else if (finished === 1) {
        value = true;
    }
    const iniNama = books.filter((bookSearch) => bookSearch.reading === value); //[0] diapus krn bakal lebih dr satu
    // console.log(iniNama);
    const allBooks = iniNama.map(book => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
    }));
    const response = h.response({
        status: 'success',
        data: {
            books: allBooks,
        },
    });
    response.code(200);
    return response;
}