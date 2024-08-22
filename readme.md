
----- KRITERIA 1 AND 2 -----------------------
Setup and Install 

1.  create package.json<br>
    npm init --y
2.  create src folder berisi server.js & route.js
3.  install hapi framework<br>
    npm install @hapi/hapi
4.  running in terminal <br>
    npm run start<br>
    then, you will see ‘Server berjalan pada http://localhost:9000’
5.  check request in server with cURL in Terminal/CMD<br>
    curl -X GET http://localhost:9000/
6.  we can also check in browser, just click http://localhost:9000/ <br>
    Web server tersebut sudah berhasil merespons dan menampilkan data dalam dokumen HTML. Namun, web server yang kita buat belum mengenali sepenuhnya permintaan yang diberikan oleh client
7.  install nanoid to create id<br>
    npm install nanoid
8.  install ESLint to see problems in vscode<br>
    npm install eslint --save-dev<br>
    npx eslint --init<br>
    added "lint": "eslint ./" to script in package.json


----- KRITERIA 3 s/d 7-----------------------------<br>
API yang Anda buat harus sesuai dengan ketentuan project dan dibuat pada route.js:<br><br>

Add Routing and Method request to project
1.  routing request (routes.js)<br>
    const { ... } = require('./server');<br>
    add Method ... and URL: ... sesuai kriteria di task
2.  method request (server.js)<br>
    const routes = require('./routes');<br>
    server.route(routes);<br>
    create function sesuai kriteria di task --> Body Request
3.  run<br>
    npm run start<br>
    curl -X POST http://localhost:9000<br>
    curl -X POST http://localhost:9000/books<br>
    curl -X POST http://localhost:9000/test<br>
    curl -X GET http://localhost:9000

------ GATAU AH POKOKNYA HRS INSTALL INI -----------<br>
npm uninstall nanoid<br>
npm install nanoid@3<br><br>

PENJELASAN OPSIONAL -----------------------------------------<br>
http://localhost:{{port}}/books?reading=1<br>
/books     --> endpoint <br>
?reading=1 --> request parameter (request.query)<br>
-> sifatnya opsional, kalo ga di input ya ga ngaruh --> klo diapus ya bodo<br>
/books/{bookId} --> path variable, kesatuan dengan endpoint (request.params<br>

URUTAN ITU PENTING BANGET!!!<br>
sesuaiin apa yang diminta duluan sm dicoding <br>
perhatiin lagi tanda -1 atau 1<br>
