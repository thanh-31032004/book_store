import { Router } from "express";
import PromotionsController from "../controllers/promotionController";

const PromotionsRouter = Router();

PromotionsRouter.get("/", PromotionsController.getAllPromotions);
PromotionsRouter.get("/:id", PromotionsController.getPromotionDetail);
PromotionsRouter.post("/", PromotionsController.createPromotion);
PromotionsRouter.put("/:id", PromotionsController.updatePromotion);
PromotionsRouter.delete("/:id", PromotionsController.deletePromotion);

export default PromotionsRouter;
