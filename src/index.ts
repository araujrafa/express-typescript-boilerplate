import express from "express";
import clientsRoutes from "./routes/clients";

const app = express();
const PORT = process.env.PORT || 3000;

// Routes
app.use("/clients", clientsRoutes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at PORT: ${PORT}`);
});
