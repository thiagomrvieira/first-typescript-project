import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "Hello typescript"})
})

app.listen(3333)