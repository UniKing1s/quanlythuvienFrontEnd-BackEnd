import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    maSach: {
      type: String,
      required: true,
    },
    tenSach: {
      type: String,
      required: true,
    },
    tacGia: {
      type: String,
      required: true,
    },
    soTrang: {
      type: Number,
      required: true,
    },
    tomTat: {
      type: String,
      required: true,
    },
    NXB: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);
export const sachModel = mongoose.model("book", schema);
