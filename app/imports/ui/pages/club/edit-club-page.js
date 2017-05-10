import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { ClubData, ClubDataSchema } from '../../../api/clubdata/clubdata.js';
import {dayList, frequencyList, categoryList} from  './add-club-page.js'

/* eslint-disable no-param-reassign */

const displayErrorMessages = 'displayErrorMessages';

// The form field structures to be shared by both the create page and the edit page.
Template.Add_Club_Page.onCreated(function onCreated() {
  this.subscribe('ClubData');
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = ClubDataSchema.namedContext('Edit_ClubData_Page');
});

Template.Edit_Club_Page.helpers({
  clubDataField(fieldName) {
    const clubData = ClubData.findOne(FlowRouter.getParam('_id'));
    return clubData && clubData[fieldName];
  },
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  days() {
    const clubData = ClubData.findOne(FlowRouter.getParam('_id'));
    const selectedDays = clubData && clubData.days;
    return clubData && _.map(dayList,
            function makeDayObject(day) {
              return { label: day, checked: _.contains(selectedDays, day)};
            }
        )
  },
  frequencies() {
    const clubData = ClubData.findOne(FlowRouter.getParam('_id'));
    const selectedFrequency = clubData && clubData.frequency;
    return clubData && _.map(frequencyList,
            function makeLevelObject(Frequency) {
              return { label: Frequency, checked: selectedFrequency === Frequency };
            });
  },
  categories() {
    const clubData = ClubData.findOne(FlowRouter.getParam('_id'));
    const selectedCategories = clubData && clubData.categories;
    return clubData && _.map(categoryList,
            function makeCategoryObject(categories) {
              return { label: categories, selected: _.contains(selectedCategories, categories)};
            });
  },
});

Template.Edit_Club_Page.events({
  'submit .club-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const name = event.target.Name.value;
    // Get bio (text area).
    const bio = event.target.Bio.value;
    // Get days (checkboxes, zero to many)
    const days = [];
    _.each(dayList, function setDay(day) {
      if (event.target[day].checked) {
        days.push(event.target[day].value);
      }
    });
    // Get frequency (radio buttons, exactly one)
    const frequency = event.target.Frequency.value;
    // Get Majors (multiple selection)
    const selectedMajors = _.filter(event.target.Category.selectedOptions, (option) => option.selected);
    const categories = _.map(selectedMajors, (option) => option.value);

    const updatedClubData = { name, bio, days, frequency, categories };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newClubData reflects what will be inserted.
    ClubDataSchema.clean(updatedClubData);
    // Determine validity.
    instance.context.validate(updatedClubData);
    if (instance.context.isValid()) {
      ClubData.update(FlowRouter.getParam('_id'), { $set: updatedClubData });
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Club_List');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
  /*'click.delete .club-data-xform'(event,) {
    event.preventDefault();

    if (confirm("Are you sure you want to delete this?")) {
      ClubData.remove(FlowRouter.getParam('_id'));
      FlowRouter.go('Club_List');
    }
  },*/
});
