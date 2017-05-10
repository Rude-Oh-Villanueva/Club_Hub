import { Template } from 'meteor/templating';
import { ClubData } from '../../../api/clubdata/clubdata.js';

Template.Club_List.helpers({

  clubList() {
    return ClubData.find();
  },
});

Template.Club_List.onCreated(function onCreated() {
  this.subscribe('ClubData');
});