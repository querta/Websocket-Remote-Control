import httpServer from './http_server/index';

const HTTP_PORT = 3000;

console.log(`Frontend is listening ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
