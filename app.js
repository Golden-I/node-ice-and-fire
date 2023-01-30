const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const characterRoutes = require("./routes/characterRoutes.js");

// app.get("/", (req, res) => res.send("welcome to my server"));
app.use("/api", characterRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
