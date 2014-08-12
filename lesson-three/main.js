(function($) {
    
    $('#signers').dragAndDropFiles({
        dropCallback: function(files) {
            alert(files.length);   
        }
    });
    
}(jQuery));