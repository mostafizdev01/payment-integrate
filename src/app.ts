import express, { Application } from "express";
// import { toNodeHandler } from "better-auth/node";
// import { auth } from "./lib/auth";
import cors from 'cors';
import cookieParser from "cookie-parser";
import { handleStripeWebhookPayment } from "./modules/payment/payment.controller";
import { Routers } from "./routes";

const app: Application = express();

app.use(cors({
    origin: process.env.APP_URL || "http://localhost:4000", // client side url
    credentials: true
}))


app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  handleStripeWebhookPayment
);

app.use(express.json());
app.use(cookieParser());


app.use("/api/v1", Routers);

app.get("/", (req, res) => {
    res.send("WellCome to payment server!");
});


export default app;