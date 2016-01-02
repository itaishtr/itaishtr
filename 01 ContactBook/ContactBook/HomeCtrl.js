(function () {
    function HomeCtrl($scope, $timeout, $location, $state, $stateParams,DataService) {
        var me = this;

        this.$state = $state;
          
        if ($stateParams.groupId)
            this.currentGroup = DataService.book.root.getItemById($stateParams.groupId);
        else
            this.currentGroup = DataService.book.root;
        //$timeout(function () {
        //    //$location.url("/contact/edit/123");
        //}, 2000);
    }            

    HomeCtrl.prototype.OnGroupSelect = function (item) {
        if (item instanceof Group) {
            var itemId;
            if (item == this.currentGroup && item.parent!=null) {
                itemId = item.parent.id;               
            }
            else {
                itemId = item.id;
            }
            this.$state.go("home", { groupId: itemId });
        }
        if (item instanceof Contact) {
            this.$state.go("ContactEdit", { contactId: item.id });
        }
    }

    HomeCtrl.prototype.OnAddGroup = function (item) {
        
    }
    HomeCtrl.prototype.OnAddContact = function (item) {
        var newContact = new Contact("Add Name", "YourMail@xxx.com");
        item.addItem(newContact);
        this.$state.go("ContactEdit", { contactId: newContact.id });
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
 
})();
