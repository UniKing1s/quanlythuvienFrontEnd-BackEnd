import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    maDocGia: {
      type: String,
      required: true,
    },
    tenDocGia: {
      type: String,
      required: true,
    },
    ngaySinh: {
      type: String,
      required: true,
    },
    ngayTao: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);
export const docGiaModel = mongoose.model("docGia", schema);
