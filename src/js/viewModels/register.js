define(['ojs/ojcore', 'knockout', 'jquery', 'services/authentication', 'helpers/user', 'ojs/ojlabel',
'ojs/ojinputtext', 'ojs/ojbutton'],
 function(oj, ko, $, Authentication, UserHelper) {
    function RegisterViewModel() {
      var self = this;

      self.error = ko.observable(false);
      self.username = ko.observable('');
      self.password = ko.observable('');

      self.register = function() {
        Authentication
          .register(self.username(), self.password())
          .then(function(token) {
            oj.Router.rootInstance.go('login');
          })
          .catch(function(){
            self.error(true);
          });
        }

      self.connected = function() {};
      self.disconnected = function() {};
      self.transitionCompleted = function() {};
    }
    return RegisterViewModel();
  }
);
