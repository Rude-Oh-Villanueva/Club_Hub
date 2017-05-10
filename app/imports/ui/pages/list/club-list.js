import { Template } from 'meteor/templating';
import { ClubData } from '../../../api/clubdata/clubdata.js';

Template.Club_List.helpers({

  clubData() {
    return ClubData.findAll();
  },

});

Template.Club_List.onCreated(function onCreated() {
  this.subscribe('ClubData');
});