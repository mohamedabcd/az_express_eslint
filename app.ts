import express from "express";

const app = express();
const port = 80;

app.get("/", (req, res) => {
  res.send("Hello my Dear");
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
