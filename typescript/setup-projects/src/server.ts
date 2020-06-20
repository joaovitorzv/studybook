import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ working: false });
});

app.listen(3333);
