import app from "./app";
import { connectDB } from "./config/db";


const port = process.env.PORT || 5000;

const bootstrap = async () => {
  await connectDB();
  const server = app.listen(port, () => {
    console.log(`server is running at port ${port}`)
  })
}

bootstrap()