import ContactCollection from 'models/contact';

var ListView = Backbone.View.extend({
  tagName: 'ul',

  className: 'contact-list',

  template: JST['contacts/list'],

  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  },

  events: {
    'add this.collection' : 'renderContacts'
  },

  renderContact: function(){
    $('.container').html(this.render().el);
  }

});

export default ListView;
