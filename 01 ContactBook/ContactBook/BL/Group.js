/// <reference path="BookItem.js" />

var Group = (function () {
    "use strict";

    function Group(name) {
        BookItem.call(this);

        this.name = name;
        this.items = [];
    }

    Group.prototype = Object.create(BookItem.prototype);

    Group.prototype.dump = function () {
        console.log(this.name);

        this.items.forEach(function (item) {
            item.dump();
        });
    }

    Group.prototype.getItemById = function (id) {
        if (this.id.toString() == id)
            return this;
        for (var i = 0 ; i < this.items.length ; i++) {
            var item = this.items[i];
            if (item.id.toString() == id)
                return item;
            if (item instanceof Group) {
                var innerItem = item.getItemById(id)
                if (innerItem)
                    return innerItem;
            }
        } 
    }
       

    Group.prototype.addItem = function (item) {
        this.items.push(item);
        item.onAdded(this);
    }

    return Group;

})();
