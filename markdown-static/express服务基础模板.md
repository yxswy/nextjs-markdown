---
title: "express服务基础模板"
date: "2020-01-01"
---

```javascript
const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.send(path.resolve(__dirname, "./static/index.html"));
});

app.listen(3010, () => {
  console.log("http://localhost:3010");
});
```
