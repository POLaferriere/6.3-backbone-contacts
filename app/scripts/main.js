import ContactCollection from 'models/contact';
import CreateContactView from 'views/FormView';

window.app = {};

$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`
  app.contacts = new ContactCollection();

  var createContactView = new CreateContactView();
  $('#container').append(createContactView.render().el);
});
