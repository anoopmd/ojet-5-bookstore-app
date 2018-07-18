define(['ojs/ojcore', 'knockout', 'jquery'],
 function(oj, ko, $) {
    function CartViewModel() {
      var self = this;

      self.goBack = function() {
        oj.Router.rootInstance.go('book');
      };

      self.connected = function() {};
      self.disconnected = function() {};
      self.transitionCompleted = function() {};
    }
    return CartViewModel();
  }
);
