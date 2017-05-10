import { Template } from 'meteor/templating';
import { ClubData } from '../../../api/clubdata/clubdata.js';

Template.Club_List.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  clubList() {
    return ClubData.find();
  },

});