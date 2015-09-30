import ContactCollection from 'models/contact';
import CreateContactView from 'views/FormView';
import ListView from 'views/ListView';

window.app = {};

$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`
  app.contacts = new ContactCollection();

  window.createContactView = new CreateContactView();
  $('#container').append(createContactView.render().el);

  window.listView = new ListView({
    collection: app.contacts
  });
  listView.collection.fetch();
  listView.collection.on('sync', function(e){
    $('#container').append(listView.render().el);
  });
});
