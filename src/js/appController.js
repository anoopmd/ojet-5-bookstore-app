/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojmodule-element-utils', 'helpers/user', 'helpers/signals', 'ojs/ojmodule-element', 'ojs/ojrouter', 'ojs/ojknockout', 'ojs/ojarraytabledatasource'],
  function(oj, ko, moduleUtils, UserHelper, Signals) {
    function ControllerViewModel() {
      var self = this;

      self.userLoggedIn = ko.observable(false);

      let token = UserHelper.getAccessToken();
      if(token) {
        self.userLoggedIn(true);
      }

      Signals.user.loggedIn.add(function(){
        self.userLoggedIn(true);
      });

      // Media queries for repsonsive layouts
      var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

       // Router setup
       self.router = oj.Router.rootInstance;
       self.router.configure({
         'login': {label: 'Login'},
         'book': {label: 'Book', isDefault: true},
         'cart': {label: 'Cart', canEnter : function() {return true;}}
       });
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

      self.moduleConfig = ko.observable({'view':[], 'viewModel':null});

      self.loadModule = function() {
        ko.computed(function() {
          var name = self.router.moduleConfig.name();
          var viewPath = 'views/' + name + '.html';
          var modelPath = 'viewModels/' + name;
          var masterPromise = Promise.all([
            moduleUtils.createView({'viewPath':viewPath}),
            moduleUtils.createViewModel({'viewModelPath':modelPath})
          ]);
          masterPromise.then(
            function(values){ 
              self.moduleConfig({'view':values[0],'viewModel':values[1]}); 
            },
            function(reason){}
          );
        });
      };

      self.logout = function(){
        let token = UserHelper.setAccessToken();
        self.userLoggedIn(false);
        self.router.go('login');
      };

      self.gotoCart = function(){
        self.router.go('cart');
      };

      oj.Router.sync().then(function() {
        console.log("Router Synced");
      }, function(error) {
         oj.Logger.error('Error when starting router: ' + error.message);
      });
     }

     return new ControllerViewModel();
  }
);
