export const connectMongoDBContent = "import mongoose from \"mongoose\";\n\n\
const connectDB = async () => {\n\
  try {\n\
    const connection = await mongoose.connect(\n\
      `${process.env.MONGODB_URI}`\n\
    );\n\
    console.log(`DB connected ${connection.connections[0].host}`);\n\
  } catch (error) {\n\
    console.log(`DB connection error: ${error.message}`);\n\
  }\n\
};\n\n\
export { connectDB };";
