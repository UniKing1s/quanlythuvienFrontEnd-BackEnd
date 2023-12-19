import express from "express";
import {
  createBook,
  deleteBook,
  getBookByMaSach,
  getBookCount,
  getBookPage,
  getBooks,
  updateBook,
} from "../controllers/sachController.js";

const router = express.Router();

//get books
router.get("/", getBooks);
//Get count document
router.get("/count/", getBookCount);
//Get book page need req.body.limit and req.body.page
router.post("/page/", getBookPage);
//create book
router.post("/", createBook);
// router.delete("/product", deleteProduct);
//delete book
router.delete("/", deleteBook);
//update book
router.patch("/", updateBook);
//get book by _Id
router.put("/byId/", getBookByMaSach);
export default router;
