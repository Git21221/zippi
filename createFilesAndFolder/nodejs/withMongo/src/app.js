export const appjsContent = `import http from 'http';

export const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from zippi');
})`