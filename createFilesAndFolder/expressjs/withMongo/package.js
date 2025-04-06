export const packageContent = `{
  "type": "module",
  "name": "zippi",
  "version": "1.0.0",
  "main": "index.js",
  "description": "A simple expressJS application with MongoDB, powered by zippi.",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon -r dotenv/config --experimental-json-modules index.js"
  },
  "dependencies": {
    "body-parser": "^2.2.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongodb": "^6.3.0",
    "mongoose": "^8.0.3",
    "nodemon": "^3.0.2"
  }
}`