export const indexjsContent = `
import { server } from "./src/app.js";
import { connectDB } from "./src/db/connectMongoDB.js";

connectDB().then(() => {
  server.listen(process.env.PORT || 7000, () => {
    console.log(\`Server is live at: http://localhost:\${process.env.PORT || 7000}\`);
  });
});
`;
