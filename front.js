const http = require('http');
const fs = require('fs');
const port = 3000;
var path = "toto.txt";

const requestHandler = (request, response) => {
  let filePath = `${__dirname}${request.url}`;
  let contentType;

  switch (true) {
    case filePath.endsWith('.css'):
      contentType = 'text/css';
      break;
    case filePath.endsWith('.js'):
      contentType = 'application/javascript';
      break;
    case filePath.endsWith('.png'):
      contentType = 'image/png';
      break;
    default:
      contentType = 'text/html';
      filePath = `${__dirname}/index.html`;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end('Error loading file');
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(data);
    }
  });
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Error starting server: ', err);
  }

  console.log(`Server is listening on ${port}`);
});
