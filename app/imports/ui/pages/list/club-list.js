import { Template } from 'meteor/templating';
import { ClubData } from '../../../api/clubdata/clubdata.js';

Template.List_Page.helpers({

  clubList() {
    return ClubData.find();
  },
});

Template.List_Page.onCreated(function onCreated() {
  this.subscribe('ClubData');
});