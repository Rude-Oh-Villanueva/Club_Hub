/**
 * Created by ajvil_000 on 4/20/2017.
 */
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { ClubData, ClubDataSchema } from '../../../api/clubdata/clubdata.js';

/* eslint-disable no-param-reassign */

const displayErrorMessages = 'displayErrorMessages';

// The form field structures to be shared by both the create page and the edit page.
export const dayList = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
export const frequencyList = ['Weekly', 'Bi-Weekly', 'Monthly'];
export const categoryList = ['Academic', 'Athletic', 'Cultural', 'Recreational', 'Political', 'Spiritual', 'Service'];


Template.Add_Club_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = ClubDataSchema.namedContext('Create_ClubData_Page');
});

Template.Add_Club_Page.helpers({
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
  },
  days() {
    return _.map(dayList, function makeDayObject(day) { return { label: day }; });
  },
  frequencies() {
    return _.map(frequencyList, function makeFrequencyObject(frequency) { return { label: frequency }; });
  },
  categories() {
    return _.map(categoryList, function makeCategoryObject(category) { return { label: category }; });
  },
});


Template.Add_Club_Page.events({
  'submit .student-data-form'(event, instance) {
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
    console.log(event.target.Frequency.value);
    const frequency = event.target.Frequency.value;
    // Get Majors (multiple selection)
    const selectedMajors = _.filter(event.target.Majors.selectedOptions, (option) => option.selected);
    const categories = _.map(selectedMajors, (option) => option.value);

    const newClubData = { name, bio, days, frequency, categories };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newClubData reflects what will be inserted.
    ClubDataSchema.clean(newClubData);
    // Determine validity.
    instance.context.validate(newClubData);
    if (instance.context.isValid()) {
      const id = ClubData.insert(newClubData);
      instance.messageFlags.set(displayErrorMessages, false);
      instance.find('form').reset();
      instance.$('.dropdown').dropdown('restore defaults');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});

