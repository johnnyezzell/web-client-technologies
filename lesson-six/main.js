require(['modules/SignThePageViewModel'], function(SignThePageViewModel) {

    ko.validation.configure({
        insertMessages: true,
        decorateElement: true,
        errorElementClass: 'error',
        errorMessageClass: 'help-inline'
    });


    $(function() {
        ko.applyBindings(ko.validatedObservable(new SignThePageViewModel()));
    });

});
