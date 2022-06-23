import robot from 'robotjs';
import { createWebSocketStream, WebSocketServer } from 'ws';
import httpServer from './http_server/index';

const HTTP_PORT = 3000;

console.log(`Frontend is listening ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
    const duplex = createWebSocketStream(ws, {
        decodeStrings: false,
        encoding: 'utf-8',
    });

    duplex.on('data', (chunk) => {
        const [command, ...value] = chunk.split(' ');
        console.log(chunk);
        duplex.write(`${command} - ${value}`);
        console.log(`${command} - ${value}`);
    })
});


/* wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        const { x, y } = robot.getMousePos();
        ws.send(`mouse_position ${x},${y}`);
        console.log('recieved: %s', data);
    });
    ws.send('text');
}); */

wss.on('close', () => {
    console.log('closed');
});
