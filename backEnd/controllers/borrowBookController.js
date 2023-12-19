import { borrowBookModel } from "../models/borrowBookModel.js";
import { docGiaModel } from "../models/docGiaModel.js";
import { sachModel } from "../models/sachModel.js";

//get products
export const getListBorrowBook = async (req, res) => {
  try {
    const muonSachL = await borrowBookModel.find();
    res.status(200).json(muonSachL);
    console.log("Danh sách", muonSachL);
    // console.log(res.data.accessToken);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};
export const getListBorrowBookWithID = async (req, res) => {
  try {
    const muonSach = req.body;
    console.log(req.body);
    const info = await borrowBookModel.find({
      maDocGia: muonSach.maDocGia,
    });
    console.log(muonSach);
    console.log(info);
    if (info && info.length > 0) {
      res.status(200).json(info);
    } else {
      res.status(500).json({ error: "err" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};

export const getBorrowBookWith2Id = async (req, res) => {
  try {
    const muonSach = req.body;
    console.log(req.body);
    const info = await borrowBookModel.findOne({
      maDocGia: muonSach.maDocGia,
      maSach: muonSach.maSach,
    });
    res.status(200).json(info);
    // console.log(user);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};

//create product
export const createBorrowBook = async (req, res) => {
  try {
    const borrowBook = req.body;
    console.log(req.body);
    const exist = await borrowBookModel.findOne({
      maDocGia: borrowBook.maDocGia,
      maSach: borrowBook.maSach,
    });
    console.log(exist);
    if (exist === null) {
      const borrow = new borrowBookModel(borrowBook);
      await borrow.save();
      res.status(200).json(borrow);
      console.log("Thông tin mượn", borrow);
      res.end();
    } else {
      res.status(201).json({ info: "Mã Đã tồn tại" });
      console.log("Mã Đã tồn tại");
      res.end();
    }
  } catch (err) {
    res.status(500).json({ error: err });
    res.end();
    console.log("err");
  }
};
export const deleteMuonSach = async (req, res) => {
  try {
    // const id = req.params.id;
    const deleteBorrow = req.body;
    await borrowBookModel.deleteOne({
      maDocGia: deleteBorrow.maDocGia,
      maSach: deleteBorrow.maSach,
    });
    // await product.save();
    res.status(200).json({ delete: "success" });
    console.log("deleted thông tin mượn thành công");
    // console.log("product", product);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};

//update product with masp
export const updateMuonSach = async (req, res) => {
  try {
    const updateMuonSach = req.body;
    console.log(updateMuonSach);
    const newMuon = await borrowBookModel.findOneAndUpdate(
      { maDocGia: updateMuonSach.maDocGia, maSach: updateMuonSach.maSach },
      updateMuonSach,
      { new: true }
    );
    await newMuon.save();
    res.status(200).json({ newMuon });
    // console.log("product", product);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};
