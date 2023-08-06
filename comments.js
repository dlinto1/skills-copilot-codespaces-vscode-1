// Create web server for development
// npm install -g http-server
// http-server
// http://localhost:8080/app/index.html
// http-server -p 3000
// http://localhost:3000/app/index.html
// http-server -p 3000 -a localhost -c-1
// http://localhost:3000/app/index.html
// http-server -p 3000 -a localhost -c-1 -o
// http://localhost:3000/app/index.html
// http-server -p 3000 -a localhost -c-1 -o -s
// http://localhost:3000
// http-server -p 3000 -a localhost -c-1 -o -s -e html
// http://localhost:3000/app/index.html
// http-server -p 3000 -a localhost -c-1 -o -s -e html --cors
// http://localhost:3000/app/index.html
// http-server -p 3000 -a localhost -c-1 -o -s -e html --cors -P http://localhost:8080
// http://localhost:3000/app/index.html
// http-server -p 3000 -a localhost -c-1 -o -s -e html --cors -P http://localhost:8080 -S -C cert.pem
// https://localhost:3000/app/index.html
// http-server -p 3000 -a localhost -c-1 -o -s -e html --cors -P http://localhost:8080 -S -C cert.pem -K key.pem
// https://localhost:3000/app/index.html
// http-server -p 3000 -a localhost -c-1 -o -s -e html --cors -P http://localhost:8080 -S -C cert.pem -K key.pem -p 3001
// https://localhost:3001/app/index.html
// npm install -g live-server
// live-server
// http://localhost:8080/app/index.html
// npm install -g browser-sync
// browser-sync start --server --files "app/**/*.html, app/**/*.js"
// http://localhost:3000/app/index.html
// npm install -g nodemon
// nodemon
// http://localhost:8080/app/index.html
// npm install -g pm2
// pm