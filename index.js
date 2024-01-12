const express = require("express");


const app = express();

app.use(express.static("public"));

app.get("/", (_, res) => res.sendFile(__dirname + "/public/pages/index.html"));

const PORT = process.env.PORT || 1818;
app.listen(PORT, () => console.log("App running @ port: " + PORT));
