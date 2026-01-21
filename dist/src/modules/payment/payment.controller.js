import { stripe } from "../../helper/stripe";
import { paymentService } from "./payment.services";
export const handleStripeWebhookPayment = async (req, res) => {
    const signature = req.headers["stripe-signature"];
    if (!signature) {
        return res.status(400).json({
            success: false,
            message: "Missing Stripe signature",
        });
    }
    let payData;
    try {
        payData = stripe.webhooks.constructEvent(req.body, signature, process.env.WEBHOOK_SECRET);
    }
    catch (error) {
        console.error("⚠️ Stripe Webhook verification failed:", error.message);
        return res.status(400).json({
            success: false,
            message: `Webhook Error: ${error.message}`,
        });
    }
    try {
        const result = await paymentService.handleStripeWebhookPayment(payData);
        return res.status(200).json({
            success: true,
            message: "Stripe webhook processed successfully",
            data: result,
        });
    }
    catch (error) {
        console.error("❌ Webhook processing failed:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error while processing webhook",
        });
    }
};
//# sourceMappingURL=payment.controller.js.map