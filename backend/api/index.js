import express from "express";
import cors from "cors";
// import { dbConnect } from "../src/db/index.js";
import routes from "../src/routes/index.routes.js";
import ServerlessHttp from "serverless-http";
import "dotenv/config";
import { sequelize } from "../src/db/index.js";

const app = express();
app.use(express.json());
app.use(cors());

const startServer = async () => {
  try {
    const connect = await sequelize.authenticate()
    console.log("Connected successfully",);

  } catch (err) {
    console.error("Database error:", err.message);
  }
};

startServer();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tourism Management API" });
});

app.listen(process.env.PORT);

app.use("/api", routes);

export default app;
// export const handler = ServerlessHttp(app);
