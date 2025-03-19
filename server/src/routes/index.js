import { Router } from 'express';
import booksRouter from './books';
import categoriesRouter from './categories';
import PromotionsRouter from './promotions';
import authRouter from './auth';
const router = Router();
router.get("/", (req, res) => {
    res.send('Home');
});
router.use("/books", booksRouter);
router.use("/categories", categoriesRouter);
router.use("/promotion", PromotionsRouter);
router.use("/auth", authRouter);
export default router;
