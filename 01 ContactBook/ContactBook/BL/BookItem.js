var BookItem = (function () {
    "use strict";

    var nextId = 1000;

    function BookItem() {
        this.id = ++nextId;
        this.parent = null;
    }

    BookItem.prototype.onAdded = function (parent) {
        this.parent = parent;
    }

    return BookItem;

})();
