var Contact = Backbone.Model.extend({
  defaults: {
    email: "",
    name: "",
    phoneNumber: "",
    twitterName: "",
    linkedin: "",
  },

  validate: function(attributes) {
    var errors = [];
    if(_.isEmpty(attributes.email)){
      errors.push("You must write an email");
    }
    if(attributes.name.length < 3){
      errors.push("You must write a name");
    }
    console.log(errors);
    return errors.length ? errors : undefined;
  }
});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/contacts'
});

export default ContactCollection;
