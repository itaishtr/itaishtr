(function () {
    'use strict';

    angular
        .module('MyApp')
        .factory('DataService', DataService);

    DataService.$inject = ['$http'];

    function DataService($http) {
        var book = new ContactBook();

        var friends = new Group("Friends");
        book.root.addItem(friends);

        var avi = new Contact("Avi", "avi@gmail.com");
        friends.addItem(avi);

        var shula = new Contact("Shula", "shula@gmail.com");
        friends.addItem(shula);

        var roni = new Contact("Roni", "roni@gmail.com");
        friends.addItem(roni);

        var rivka = new Contact("Ribka", "ori@gmail.com");
        book.root.addItem(rivka);

        var dana = new Contact("Dana", "dana@gmail.com");
        book.root.addItem(dana);

        book.dump();

        var service = {
            book : book,        
        };

        return service;
    }
})();