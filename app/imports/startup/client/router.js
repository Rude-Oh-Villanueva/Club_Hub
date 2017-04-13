import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/landing-page', {
  name: 'Landing_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Landing_Page' });
  },
});

FlowRouter.route('/add-club-page', {
  name: 'Add_Club',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Club' });
  },
});

FlowRouter.route('/edit-club-page', {
  name: 'Edit_Club',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Club' });
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
