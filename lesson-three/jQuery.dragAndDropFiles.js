(function($) {

    $.fn.dragAndDropFiles = function(options) {
              
        var defaultBorder = $(this).css('border');
        var $element = $(this);
        
        $(this).on('dragenter', function(e) {
            e.stopPropagation();
            e.preventDefault();
            $element.css('border', options.hoverBorderStyle || "2px solid");
        });
        
        $(this).on('dragover', function(e) {
            e.stopPropagation();
            e.preventDefault();
        });
        
        $(this).on('drop', function(e) {
            $element.css('border', options.defaultBorderStyle || defaultBorder);
            e.preventDefault();
            if(typeof options.dropCallback === 'function') {
                options.dropCallback(e.originalEvent.dataTransfer.files);   
            }
        });
        
        $(document).on('dragenter', function (e) 
        {
            e.stopPropagation();
            e.preventDefault();
        });
        $(document).on('dragover', function (e) 
        {
          e.stopPropagation();
          e.preventDefault();
          $element.css('border', defaultBorder);
        });
        $(document).on('drop', function (e) 
        {
            e.stopPropagation();
            e.preventDefault();
        });

        return this;
        
    };
    
})(jQuery);