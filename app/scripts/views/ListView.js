import ContactCollection from 'models/contact';

var ListView = Backbone.View.extend({
  tagName: 'ul',

  template: JST['contacts/list'],

  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  },



  // events: {
  //   'add' : 'renderContacts'
  // },

  initialize: function(){
    // var stats = {'name': 'Pierre'};
    // console.log(stats);
    // $('#container').append(this.render(stats).el);

    // var contacts = new ContactCollection();
    // var list = this;
    // contacts.fetch();
    // contacts.on('sync', function(e){
    //   console.log(e);
    //   $('#container').append();
    // });
  },

});

export default ListView;
