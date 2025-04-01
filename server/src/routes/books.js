import { Router } from "express";
import BooksController from "../controllers/bookController";

const booksRouter = Router();

const booksController = new BooksController(); // Đặt tên biến theo camelCase

booksRouter.get("/", booksController.getAllBooks);
booksRouter.get("/:id", booksController.getBookDetail);
booksRouter.post("/", booksController.createBook);
booksRouter.put("/:id", booksController.updateBook);
booksRouter.delete("/:id", booksController.deleteBook);

export default booksRouter;
