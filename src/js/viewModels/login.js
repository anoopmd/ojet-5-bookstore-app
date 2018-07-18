define(['ojs/ojcore', 'knockout', 'jquery', 'services/authentication', 'helpers/user', 'ojs/ojlabel',
'ojs/ojinputtext', 'ojs/ojbutton'],
 function(oj, ko, $, Authentication, UserHelper) {
    function LoginViewModel() {
      var self = this;

      self.error = ko.observable(false);
      self.username = ko.observable('');
      self.password = ko.observable('');

      self.login = function() {
        Authentication
          .login(self.username(), self.password())
          .then(function(token) {
            UserHelper.setAccessToken(token);
            oj.Router.rootInstance.go('book');
          })
          .catch(function(){
            self.error(true);
          });
        }

      self.connected = function() {};
      self.disconnected = function() {};
      self.transitionCompleted = function() {};
    }
    return LoginViewModel();
  }
);
