import { default as MainTemplate } from './../../../../../lib/client/template/main/main-t.jsx';
// import { SaraimainHomePage } from './saraimain-home-page.jsx'

FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainTemplate);
    // ReactLayout.render(MainTemplate, {
    //   content: 'Hello'
    // })
  }
});

