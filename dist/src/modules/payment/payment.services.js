import { prisma } from "../../lib/prisma";
import { PaymentStatus } from "../../../generated/prisma/enums";
const handleStripeWebhookPayment = async (payData) => {
    switch (payData.type) {
        case "checkout.session.completed": {
            const session = payData.data.object;
            // --- PAYMENT SUCCESS ---
            await prisma.plan.create({
                data: {
                    amount: session.amount_total,
                    currency: session.currency,
                    card_account_holder_name: session?.customer_details?.name,
                    customer_email: session?.customer_details?.email,
                    transition_id: session?.payment_intent,
                    payment_methud_type: session?.payment_method_types[0],
                    status: PaymentStatus.PAID,
                    country: session?.customer_details?.address?.country
                }
            });
            console.log("✅ Payment Completed");
            break;
        }
        default:
            console.log(`Unhandled event type: ${payData.type}`);
    }
};
export const paymentService = {
    handleStripeWebhookPayment,
};
//# sourceMappingURL=payment.services.js.map