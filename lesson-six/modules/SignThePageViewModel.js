define([], function() {

    var SignThePageViewModel = (function() {

        return function() {

            var that = this;

            that.signers = ko.observableArray([]);

            that.firstName = ko.observable('');
            that.lastName = ko.observable('');
            that.emailAddress = ko.observable('');

            that.firstNameDirty = ko.observable(false);
            that.lastNameDirty = ko.observable(false);
            that.emailAddressDirty = ko.observable(false);

            that.addSigner = function() {

                that.signers.push({
                    firstName: that.firstName(),
                    lastName: that.lastName(),
                    emailAddress: that.emailAddress()
                });

                that.firstName('');
                that.lastName('');
                that.emailAddress('');

                that.firstNameDirty(false);
                that.lastNameDirty(false);
                that.emailAddressDirty(false);
            };

        };

    }());

    return SignThePageViewModel;

});
