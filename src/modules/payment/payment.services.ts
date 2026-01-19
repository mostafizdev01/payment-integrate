import Stripe from "stripe";
import { prisma } from "../../lib/prisma";
import { PaymentStatus } from "../../../generated/prisma/enums";


const handleStripeWebhookPayment = async (payData: Stripe.Event) => {
  switch (payData.type) {
    case "checkout.session.completed": {

      const session = payData.data.object;

      // --- PAYMENT SUCCESS ---

      await prisma.plan.create({
        data: {
            amount: session.amount_total as number,
            currency: session.currency as string,
            card_account_holder_name: session?.customer_details?.name as string,
            customer_email: session?.customer_details?.email as string,
            transition_id: session?.payment_intent as string,
            payment_methud_type: session?.payment_method_types[0] as string,
            status: PaymentStatus.PAID,
            country: session?.customer_details?.address?.country as string
        }
      })

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