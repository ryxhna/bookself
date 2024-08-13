
----- KRITERIA 1 AND 2 -----------------------

Setup and Install 

1.  create package.json
    > npm init --y
2.  create src folder berisi server.js & route.js
3.  install hapi framework
    > npm install @hapi/hapi
4.  running in terminal 
    > npm run start
    > then, you will see ‘Server berjalan pada http://localhost:9000’
5.  check request in server with cURL in Terminal/CMD
    > curl -X GET http://localhost:9000/
6.  we can also check in browser, just click http://localhost:9000/ 
    > Web server tersebut sudah berhasil merespons dan menampilkan data dalam dokumen HTML. Namun, web server yang kita buat belum mengenali sepenuhnya permintaan yang diberikan oleh client
7.  install nanoid to create id
    > npm install nanoid
8.  install ESLint to see problems in vscode
    > npm install eslint --save-dev
    > npx eslint --init
    > added "lint": "eslint ./" to script in package.json


----- KRITERIA 3 s/d 7-----------------------
API yang Anda buat harus sesuai dengan ketentuan project dan dibuat pada route.js:

Add Routing and Method request to project
1.  routing request (routes.js)
    > const { ... } = require('./server');
    > add Method ... and URL: ... sesuai kriteria di task
2.  method request (server.js)
    > const routes = require('./routes');
    > server.route(routes);
    > create function sesuai kriteria di task --> Body Request
3.  run
    > npm run start
    > curl -X POST http://localhost:9000
    > curl -X POST http://localhost:9000/books
    > curl -X POST http://localhost:9000/test
    > curl -X GET http://localhost:9000

/------ GATAU AH POKOKNYA HRS INSTALL INI -----------------------------------------
> npm uninstall nanoid
> npm install nanoid@3

PENJELASAN OPSIONAL -----------------------------------------
http://localhost:{{port}}/books?reading=1
> /books     --> endpoint 
> ?reading=1 --> request parameter (request.query)
> -> sifatnya opsional, kalo ga di input ya ga ngaruh --> klo diapus ya bodo
> /books/{bookId} --> path variable, kesatuan dengan endpoint (request.params)

URUTAN ITU PENTING BANGET!!!
sesuaiin apa yang diminta duluan sm dicoding 
perhatiin lagi tanda -1 atau 1 
