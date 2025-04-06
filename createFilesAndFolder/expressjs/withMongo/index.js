export const indexjsContent = `
import { app } from "./src/app.js";
import { connectDB } from "./src/db/connectMongoDB.js";

connectDB().then(() => {
  app.listen(process.env.PORT || 7000, () => {
    console.log(\`Server is live at: http://localhost:\${process.env.PORT || 7000}\`);
  });
});
`;
