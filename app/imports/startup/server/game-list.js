import { Contacts } from '../../api/contact/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const gameSeeds = [

];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(gameSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
