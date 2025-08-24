import { model, Schema } from 'mongoose';

export const Order = model(
  'Order',
  new Schema({
    table: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
      default: 'WAITING',
      required: true,
    },
    products: {
      type: Schema.Types.ObjectId,
      ref: 'Products',
      required: true,
    },
  }),
);
