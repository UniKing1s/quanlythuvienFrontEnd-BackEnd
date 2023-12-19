import { docGiaModel } from "../models/docGiaModel.js";

//get products
export const getDocGias = async (req, res) => {
  try {
    const docGias = await docGiaModel.find();
    res.status(200).json(docGias);
    console.log("docGia", docGias);
    // console.log(res.data.accessToken);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};
export const getDocGiaByMaDocGia = async (req, res) => {
  try {
    const docGia = req.body;
    console.log(req.body);
    const user = await docGiaModel.findOne({
      maDocGia: docGia.maDocGia,
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ err: "Not found" });
    }
    // console.log(user);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};

//create product
export const createDocGia = async (req, res) => {
  try {
    const docGia = req.body;
    console.log(req.body);
    const exist = await docGiaModel.findOne({ maDocGia: docGia.maDocGia });
    console.log(exist);
    if (exist === null) {
      const user = new docGiaModel(docGia);
      await user.save();
      res.status(200).json(user);
      console.log("độc Giả", user);
    } else {
      res.status(202).json({ info: "Mã Đã tồn tại" });
      console.log("Mã Đã tồn tại");
    }
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};
export const deleteDocGia = async (req, res) => {
  try {
    // const id = req.params.id;
    const deleteDocGIa = req.body;

    await docGiaModel.deleteOne({ maDocGia: deleteDocGIa.maDocGia });
    // await product.save();

    res.status(200).json({ delete: "success" });
    console.log("deleted độc giả thành công");
    // console.log("product", product);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};

//update product with masp
export const updateDocGia = async (req, res) => {
  try {
    const updateDocGia = req.body;
    const docGia = await docGiaModel.findOneAndUpdate(
      { maDocGia: updateDocGia.maDocGia },
      updateDocGia,
      { new: true }
    );
    await docGia.save();
    res.status(200).json({ docGia });
    // console.log("product", product);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};
