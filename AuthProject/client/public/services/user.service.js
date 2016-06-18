(function () {

  'use strict';
  angular.module("App").factory("UserService", function(){
        
        var _user = undefined;

        var service = {

            // User (read / write)
            getUser : function() {

                _user = _user || undefined;
                return _user;
            },

            setUser :　function(value) {

                if (value && !value._id) { return; }
                _user = value || undefined;
            },

            // isUserLoaded (read only ... no setter)
            isUserLoaded : function() {
                return (_user && _user._id != null);
            },

            // Clear (similar to class method)
            clear : function() {
                _user = undefined;
            }

        };

        return service;
  });

})();