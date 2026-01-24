import compression from "compression";
import cors from "cors";
import express from "express";
import { Routers } from "./app/routes/routes";
import { handleStripeWebhookPayment } from "./app/modules/payment/payment.controller";

const app = express();

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  handleStripeWebhookPayment
);

// Middleware
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(compression()); // Compresses response bodies for faster delivery
app.use(express.json()); // Parse incoming JSON requests

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/api/v1", Routers)

// Default route for testing
app.get("/", (_req, res) => {
  res.send("WellCome Payment Intregate Server!");
});


// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
