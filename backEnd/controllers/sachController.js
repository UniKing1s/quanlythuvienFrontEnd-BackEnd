import { sachModel } from "../models/sachModel.js";

//get products
export const getBooks = async (req, res) => {
  try {
    const book = await sachModel.find();
    res.status(200).json(book);
    console.log("book", book);
    // console.log(res.data.accessToken);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};
export const getBookPage = async (req, res) => {
  try {
    const book = await sachModel
      .find()
      .limit(req.body.limit)
      .sort({ _id: -1 })
      .skip(req.body.limit * req.body.page);
    res.status(200).json(book);
    console.log("book", book);
    // console.log(res.data.accessToken);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};

export const getBookCount = async (req, res) => {
  try {
    const count = await sachModel.countDocuments();
    res.status(200).json({ count: count });
    console.log("book", count);
    // console.log(res.data.accessToken);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};

export const getBookByMaSach = async (req, res) => {
  try {
    const bookObject = req.body;
    console.log(req.body);
    const book = await sachModel.findOne({ maSach: bookObject.maSach });
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ err: "not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};

//create product
export const createBook = async (req, res) => {
  try {
    const newBook = req.body;
    console.log(req.body);

    const book = new sachModel(newBook);
    await book.save();
    res.status(200).json(book);
    console.log("product", book);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};
export const deleteBook = async (req, res) => {
  try {
    // const id = req.params.id;
    const deleteBook = req.body;

    await sachModel.deleteOne({ maSach: deleteBook.maSach });
    // await product.save();

    res.status(200).json({ delete: "success" });
    console.log("deleted book");
    // console.log("product", product);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};

//update product with masp
export const updateBook = async (req, res) => {
  try {
    const updateBook = req.body;
    const book = await sachModel.findOneAndUpdate(
      { maSach: updateBook.maSach },
      updateBook,
      { new: true }
    );
    await book.save();
    res.status(200).json({ book });
    // console.log("product", product);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("err");
  }
};
