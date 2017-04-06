import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/game-list', {
  name: 'Club_List',
  action() {
    BlazeLayout.render('App_Body', { main: 'Club_List' });
  },
});


FlowRouter.route('/find-game', {
  name: 'Find_Game',
  action() {
    BlazeLayout.render('App_Body', { main: 'Find_Game' });
  },
});

FlowRouter.route('/host-game', {
  name: 'Host_Game',
  action() {
    BlazeLayout.render('App_Body', { main: 'Host_Game' });
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
