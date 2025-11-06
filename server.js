import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Folder public & anggota
app.use(express.static(path.join(__dirname, "public")));
app.use("/anggota", express.static(path.join(__dirname, "anggota")));

// Root route → tampilkan index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Server berjalan di http://localhost:${PORT}`));