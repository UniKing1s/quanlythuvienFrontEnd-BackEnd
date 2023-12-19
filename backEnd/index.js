import express, { urlencoded } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sachs from "./routers/sachs.js";
import docGias from "./routers/docGias.js";
import muonSach from "./routers/muonSach.js";
import mongoose from "mongoose";
import "dotenv/config.js";
const app = express();
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extends: true, limit: "30mb" }));
app.use(cors());
// , {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
mongoose
  .connect(`${process.env.MongoDB_url}`)
  .then(() => {
    console.log("connected to db");
    app.listen(5000, () => console.log(`server is runing`));
  })
  .catch(() => {
    console.log("connected fail");
  });
app.use("/book", sachs);
app.use("/docGia", docGias);
app.use("/muonSach", muonSach);
