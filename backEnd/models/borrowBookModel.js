import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    maDocGia: {
      type: String,
      required: true,
    },
    maSach: {
      type: String,
      required: true,
    },
    ngayMuon: {
      type: String,
      required: false,
    },
    ngayTra: {
      type: String,
      required: false,
      default: "",
    },
  },
  { versionKey: false }
);
export const borrowBookModel = mongoose.model("muonSach", schema);
