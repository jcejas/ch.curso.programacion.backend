import express from "express";
import usersRouter from "./routes/users.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//Use routers
app.use("/api/users", usersRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});