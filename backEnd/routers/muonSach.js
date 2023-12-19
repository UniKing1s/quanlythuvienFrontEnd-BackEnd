import express from "express";
import {
  createBorrowBook,
  deleteMuonSach,
  getBorrowBookWith2Id,
  getListBorrowBook,
  getListBorrowBookWithID,
  updateMuonSach,
} from "../controllers/borrowBookController.js";

const router = express.Router();

//get books
router.get("/", getListBorrowBook);
//create book
router.post("/", createBorrowBook);
router.post("/getMaDocGa/", getListBorrowBookWithID);
// router.delete("/product", deleteProduct);
//delete book
router.delete("/", deleteMuonSach);
//update book
router.patch("/", updateMuonSach);
//get book by _Id
router.put("/byId/", getBorrowBookWith2Id);
export default router;
