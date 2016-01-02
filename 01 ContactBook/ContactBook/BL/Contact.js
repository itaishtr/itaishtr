/// <reference path="BookItem.js" />

var Contact = (function () {
    "use strict";


    function Contact(name, email) {
        BookItem.call(this);

        this.name = name;
        this.email = email;
    }

    Contact.prototype = Object.create(BookItem.prototype);

    Contact.prototype.dump = function () {
        console.log(this.name + ", " + this.email);
    }

    return Contact;

})();
