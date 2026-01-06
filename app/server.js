const express = require("express");
const os = require("os");

const app = express();

app.get("/api/", (req, res) => {
  const start = Date.now();
  while (Date.now() - start < 50) {}

  res.json({
    instance: process.env.INSTANCE_NAME,
    hostname: os.hostname(),
    cpu: os.cpus().length,
    message: `Request berhasil dilayani oleh ${process.env.INSTANCE_NAME}`,
  });
});

app.listen(3000, () => console.log("Backend running on 3000"));
