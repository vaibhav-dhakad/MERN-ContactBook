import express from "express";
import Connection from "./database/db.js";
import Routes from "./Router/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));


app.use('/',Routes);


Connection();

app.listen(8000, () => {
    console.log("Server Running SuccessFully at Port 8000");
})