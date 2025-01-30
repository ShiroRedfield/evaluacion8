const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/pag1", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "pag1.html"));
});

app.get("/pag2", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "pag2.html"));
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})
