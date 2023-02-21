const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.json({ visiteurs: ["visiteur1", "visiteur2", "visiteur3"] });
});

app.listen(8000, () => {
  console.log("Backend started in port 8000");
});
