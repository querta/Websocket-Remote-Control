import { createWebSocketStream, WebSocketServer } from 'ws';
import httpServer from './http_server/index';
import processor from './processor';

const HTTP_PORT = 3000;

console.log(`Frontend is listening ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });
console.log(`Backend is listening 8080 port!`);

wss.on('connection', async (ws) => {
    const duplex = createWebSocketStream(ws, {
        decodeStrings: false,
        encoding: 'utf-8',
    });

    duplex.on('data', async (chunk) => {
        try {
            const [cmd, ...coord] = chunk.split(' ');
            console.log(`Recieved: ${cmd} ${coord}`);
            const responce = await processor(cmd, coord.map(Number));
            console.log(`Result: ${cmd} ${responce}`);
            duplex.write(`${cmd} ${responce}\0`);
        } catch (err: any) {
            duplex.write(err.message);
            console.log(err.message)
        }
    })
});

wss.on('close', () => {
    console.log('Service closed');
});

process.on('SIGINT', () => { 
    wss.close();
    console.log('Service closed');
    process.exit();
 })
