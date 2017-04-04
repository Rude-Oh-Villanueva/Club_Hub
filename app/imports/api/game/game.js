import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Games = new Mongo.Collection('Games');

/**
 * Create the schema for Stuff
 */
export const GamesSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 200,
  },
  phoneNumber: {
    label: 'Phone Number',
    type: String,
    optional: false,
    max: 200,
  },
  address: {
    label: 'Address',
    type: String,
    optional: false,
    max: 200,
  },
});

Games.attachSchema(GamesSchema);