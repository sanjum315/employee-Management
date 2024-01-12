import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoutes.js";

const app = express();
const PORT = 9000;

app.use(
  cors({
    origin: ["http://192.168.1.13:5173"],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/auth", adminRouter);

app.listen(PORT, () => {
  console.log("Sever is Running on Port " + PORT);
});
