import { Schema, model, ObjectId } from "mongoose";

export interface IListing {
  category: "rent" | "home" , // for ts this make it so that the use can only choose one of the 2 strings that were written
  price: Number,
  address: Array<String>,
  gallery: Array<String>,
  description: String,
  features: Array<String>
}

const listingSchema = new Schema<IListing>({
  category: {
    type: String,
    enum: ["rent", "home"],
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  address: [{
    type: String,
    required: true,
    unique: true
  }],
  gallery: [{
    type: String,
    // ref:
  }],
  description: {
    type: String,
    required: true
    // ref:
  },
  features: [{
    type: String,
    required: true
  }]
});

export default model<IListing>('Listing', listingSchema);

