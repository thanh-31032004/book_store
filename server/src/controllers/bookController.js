import { StatusCodes } from "http-status-codes";
import Book from "../models/BookModel";
import ApiError from "../utils/ApiErrors";

class BooksController {
    // GET /Books
    async getAllBooks(req, res, next) {
        try {
            const books = await Book.find().populate([
                { path: "category" },
                { path: "promotion" }
            ]);
            res.status(StatusCodes.OK).json(books);
        } catch (error) {
            next(error);
        }
    }
    // GET /Books/:id
    async getBookDetail(req, res, next) {
        try {
            const Book = await Book.findById(req.params.id);

            if (!Book) throw new ApiError(404, "Book Not Found");
            res.status(StatusCodes.OK).json(Book);
        } catch (error) {
            next(error);
        }
    }
    // POST /Books
    async createBook(req, res, next) {
        try {
            const newBook = await Book.create(req.body);
            res.status(StatusCodes.CREATED).json({
                message: "Create Book Successfull",
                data: newBook,
            });
        } catch (error) {
            next(error);
        }
    }
    // PUT /Books/:id
    async updateBook(req, res, next) {
        try {
            const updateBook = await Book.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updateBook) throw new ApiError(404, "Book Not Found");

            res.status(StatusCodes.OK).json({
                message: "Update Book Successfull",
                data: updateBook,
            });
        } catch (error) {
            next(error);
        }
    }
    // DELETE /Books/:id
    async deleteBook(req, res, next) {
        try {
            const Book = await Book.findByIdAndDelete(req.params.id);
            if (!Book) throw new ApiError(404, "Book Not Found");
            res.status(StatusCodes.OK).json({
                message: "Delete Book Done",
            });
        } catch (error) {
            next(error);
        }
    }
}

export default BooksController;
