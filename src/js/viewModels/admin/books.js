define(['ojs/ojcore', 'knockout', 'jquery',
  'ojs/ojnavigationlist', 'ojs/ojrouter', 'ojs/ojmodule',
  'ojs/ojknockout', 'ojs/ojinputtext', 'ojs/ojcheckboxset', 'ojs/ojformlayout'],
 function(oj, ko, $) {
  
    function AdminBooksViewModel() {
      var self = this;

      this.book = {};

      self.connected = function() {
      };

      self.disconnected = function() {
      };

      self.transitionCompleted = function() {
      };
    }
    return AdminBooksViewModel();
  }
);
