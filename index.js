import { Schema } from 'mongoose';

export const FeaturePoint = new Schema({
  _id: false,
  type: { type: String, default: 'Feature', enum: ['Feature'] },
  geometry: {
    type: { type: String, default: 'Point', enum: ['Point'] },
    coordinates: { type: [Number, Number], required: true },
  },
  properties: {},
});

export const FeatureLineString = new Schema({
  _id: false,
  type: { type: String, default: 'Feature', enum: ['Feature'] },
  geometry: {
    type: { type: String, default: 'LineString', enum: ['LineString'] },
    coordinates: [[Number, Number]],
  },
  properties: {},
});
