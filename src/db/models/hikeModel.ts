import mongoose, { Schema } from "mongoose";
import { Hike } from "../../interfaces/hike";

const hikeSchema = new Schema<Hike>({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  distance: { type: Number, required: true },
  duration: { type: Number, required: true },
  difficulty: { type: String, required: true },
  image: { type: String },
  postCode: { type: Number, required: true },
  start: { type: String, required: true },
  isLoop: { type: Boolean },
  isTop: { type: Boolean },
  isValid: { type: Boolean },
  date: { type: Date },
});

const hikeModel = mongoose.model("Hike", hikeSchema);

export { hikeModel };
