import { planService } from "./plan.service";
const createPlan = async (req, res, next) => {
    const userEmail = req.user.email;
    const { planPrice } = req.body;
    const result = await planService.createPlan(userEmail, planPrice);
    return res.send(result);
};
export const planController = {
    createPlan
};
//# sourceMappingURL=plan.controller.js.map