export const appjsContent = `import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.send("<center><h1>Hello from zippi</h1></center>");
})

export {app};`