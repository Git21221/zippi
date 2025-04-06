export const packageContent = `{
  "type": "module",
  "name": "zippi",
  "version": "1.0.0",
  "main": "index.js",
  "description": "A simple Node.js application with MongoDB, powered by zippi.",
  "scripts": {
    "start": "node -r dotenv/config --experimental-json-modules index.js"
  },
  "dependencies": {
    "dotenv": "^16.4.7",
    "mongoose": "^8.13.2"
  }
}`