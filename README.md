# Websocket-Remote-Control
Backend is implemented on Typescript, working with Node.js.
Frontend is used: [NodeJS websocket task template](https://github.com/rolling-scopes-school/remote-control "NodeJS websocket task template").

Implemented functions:
- Working using websocket connection
- Move mouse (with Up, Down, Left, Right buttons)
- Draw circle, rectangle and square (Buttons: "c", "r", "s")
- Send current mouse coordinates (Button "p")
- Make 200x200 screenshot of mouse arrow area (Buttons ctrl+p)

Technical info:
Backend written on typescript. Node.js 16 LTS.
Used libraries: [WS](https://www.npmjs.com/package/ws "WS"), [robotjs](https://www.npmjs.com/package/robotjs "robotjs"), [jimp](https://www.npmjs.com/package/jimp "jimp") (for screenshot)

### How to start:
1. Clone repository:
> git clone git@github.com:querta/Websocket-Remote-Control.git
2. Go to repository folder
3. To start in regular mode:
> npm run start 
3.1 To start in dev mode (using nodemon):
> npm run start:dev
4. Go to http://localhost:3000/ and follow instructions on the webpage
