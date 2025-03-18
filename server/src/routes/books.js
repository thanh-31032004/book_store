import { Router } from "express";
import BooksController from "../controllers/bookController";

const booksRouter = Router();

const booksController = new BooksController(); // Đặt tên biến theo camelCase

booksRouter.get("/", booksController.getAllBooks.bind(booksController));
booksRouter.get("/:id", booksController.getBookDetail.bind(booksController));
booksRouter.post("/", booksController.createBook.bind(booksController));
booksRouter.put("/:id", booksController.updateBook.bind(booksController));
booksRouter.delete("/:id", booksController.deleteBook.bind(booksController));

export default booksRouter;
