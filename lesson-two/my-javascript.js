// Test JavaScript for the lesson

// This is called when the entire page has been loaded, including all images and assets
//window.onload = function() {
//    console.log(">> JavaScript is being executed when all assets have been loaded completely");
//};

//
//(function() {
//    var that = this;
//    that.init = function() {
//        console.log(">> JavaScript is being executed before images and other assets are loaded, just when the DOM is populated");
//        console.log(">> H1 contains '" + document.getElementsByTagName("H1")[0].innerHTML + "'");
//    };
//    that.readyCheck = setInterval(function() {
//        var body = document.getElementsByTagName('BODY')[0];
//        if (body) {
//            that.init();
//            clearInterval(that.readyCheck);
//        }
//    }, 10);
//}());