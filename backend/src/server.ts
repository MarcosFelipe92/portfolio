import express from "express";
import cors from "cors";
import router from "./routes";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
