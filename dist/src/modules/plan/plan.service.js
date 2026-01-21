import { stripe } from "../../helper/stripe";
import { prisma } from "../../lib/prisma";
const createPlan = async (email, planPrice) => {
    const userInfo = await prisma.user.findUnique({
        where: {
            email
        }
    });
    const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        ...(userInfo?.email && {
            customer_email: userInfo.email,
        }),
        line_items: [
            {
                price_data: {
                    currency: "bdt",
                    product_data: {
                        name: "Buying Test plan",
                    },
                    unit_amount: Number(planPrice) * 100,
                },
                quantity: 1,
            },
        ],
        success_url: "https://mostafizdev.com",
        cancel_url: "https://github.com/mostafizdev01",
    });
    return {
        checkoutUrl: session.url
    };
};
export const planService = {
    createPlan
};
//# sourceMappingURL=plan.service.js.map