import express, { Application } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from 'cors';
import { Routers } from "./routes";

const app: Application = express();

app.use(cors({
    origin: process.env.APP_URL || "http://localhost:4000", // client side url
    credentials: true
}))

app.use(express.json());

// app.all("/api/auth/*splat", toNodeHandler(auth));

app.use("/api/v1", Routers);

app.get("/", (req, res) => {
    res.send("Hello, World!");
});


export default app;