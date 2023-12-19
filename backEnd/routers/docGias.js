import express from "express";
import {
  createDocGia,
  deleteDocGia,
  getDocGiaByMaDocGia,
  getDocGias,
  updateDocGia,
} from "../controllers/docGiaController.js";

const router = express.Router();

//get books
router.get("/", getDocGias);
//create book
router.post("/", createDocGia);
// router.delete("/product", deleteProduct);
//delete book
router.delete("/", deleteDocGia);
//update book
router.patch("/", updateDocGia);
//get book by _Id
router.put("/byId/", getDocGiaByMaDocGia);
export default router;
