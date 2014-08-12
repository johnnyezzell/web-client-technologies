// This is a simple example of a closure
var Closure = (function() {
    
    var that = this;
    
    that.list = [];
    
    that.privateAddToList = function(item) {
        that.list.push(item);   
    };
    
    return function() {
        this.addToList = function(item) {
            that.privateAddToList(item);   
        };
    };
    
}());

// Create an object like you would with any constructor
var closure = new Closure();

// The addToList method is public
closure.addToList("Test");

try {
    // list is private and will not exist
    closure.list.push(2);
    console.log(">> Completed Successfully");
}
catch(error) {
    console.log(">> list is not publicly accessible");
}

try {
    // privateAddToList is also private and will not exist
    closure.privateAddToList(4);
    alert("Completed Successfully");
}
catch(error) {
    console.log(">> privateAddToList is not publicly accessible");
}

