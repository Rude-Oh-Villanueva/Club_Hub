import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/home-page', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/', {
  name: 'Landing_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Landing_Page' });
  },
});

FlowRouter.route('/add-club-page', {
  name: 'Add_Club_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Club_Page' });
  },
});

FlowRouter.route('/edit-club-page/:_id', {
  name: 'Edit_Club_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Club_Page' });
  },
});

FlowRouter.route('/club-list', {
  name: 'Club_List',
  action() {
    BlazeLayout.render('App_Body', { main: 'Club_List' });
  },
});

FlowRouter.route('/faq-page', {
  name: 'Faq_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Faq_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
