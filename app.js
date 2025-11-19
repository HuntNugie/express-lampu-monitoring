import express from "express"
import cors from "cors"
import indexRoute from "./routes/indexRoute.js"
import { config } from "dotenv";
const app = express();

config();
app.use(cors());

// untuk routes
app.use("/api",indexRoute)


// untuk server
app.listen(process.env.SERVER_PORT,()=>{
    console.log(`berjalan di port ${process.env.SERVER_PORT}`)
});