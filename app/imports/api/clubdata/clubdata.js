import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const ClubData = new Mongo.Collection('ClubData');

/**
 * Create the schema for ClubData
 */
export const ClubDataSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
  },
  bio: {
    label: 'Bio',
    type: String,
    optional: true,
    defaultValue: '',
  },
  days: {
    label: 'Days',
    type: [String],
  },
  frequency: {
    label: 'Frequency',
    type: String,
  },
  categories: {
    label: 'Category',
    type: [String],
  },
});

ClubData.attachSchema(ClubDataSchema);
