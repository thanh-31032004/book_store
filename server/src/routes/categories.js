import { Router } from "express";
import CategoriesController from "../controllers/categoriesController";

const categoriesRouter = Router();

const categoriesController = new CategoriesController();

categoriesRouter.get("/", categoriesController.getAllCategories);
categoriesRouter.get("/:id", categoriesController.getCategoryDetail);
categoriesRouter.post("/", categoriesController.createCategory);
categoriesRouter.put("/:id", categoriesController.updateCategory);
categoriesRouter.delete("/:id", categoriesController.deleteCategory);

export default categoriesRouter;
