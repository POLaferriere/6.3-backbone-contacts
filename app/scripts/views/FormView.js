var CreateContactView = Backbone.View.extend({
  tagName: 'form',
  className: 'create-contact',

  events : {
    'submit': 'createContact'
  },

  template: JST['contacts/create'],

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  createContact: function(e){
    e.preventDefault();
    app.contacts.create(this.getFormInfo());
    $('#container').html(this.render().el);
  },

  getFormInfo: function(){
    var results = {};
    var inputs = this.$el.serializeArray();
    inputs.forEach(function(input){
      results[input.name] = input.value;
    });
    results.name = results.firstName + " " + results.lastName;
    results.pierreContact = true;
    return _.omit(results, 'firstName', 'lastName');
  },


});

export default CreateContactView;
