(function () {
    function ContactEditCtrl($scope, $timeout, $location, $state, $stateParams, DataService) {
        var me = this;

        this.$state = $state;

        if ($stateParams.contactId)
            this.currentContact = DataService.book.root.getItemById($stateParams.contactId);
        else
            this.currentContact = DataService.book.root;
    }
   
    ContactEditCtrl.prototype.saveContact = function (item) {
     
 
    }

    angular.module("MyApp").controller("ContactEditCtrl", ContactEditCtrl);
 
})();
