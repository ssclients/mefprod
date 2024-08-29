$(function () {
    'use strict';

    // Cache DOM elements for better performance
    const forms = $('.needs-validation');
    const submitForm = $('.submit_form');
    const subscribeButton = $('.btn_submit-subscribe');
    const successMsg = $('.success_msg');
    const errorMsg = $('.error_msg');
    const actionInput = forms.find("input[name='action']");
    const successMsgSubscribe = $('.success_msg_subscribe');

    forms.on('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
        const form = $(this);

        if (!form[0].checkValidity()) {
            return; // Exit early if the form is not valid
        }

        submitForm.html('Sending...');
        subscribeButton.html('Sending...');

        const toast = new bootstrap.Toast(successMsg[0]);
        const errtoast = new bootstrap.Toast(errorMsg[0]);

        const formData = form.serialize();

        $.ajax({
            type: "POST",
            url: "https://hooks.airtable.com/workflows/v1/genericWebhook/appiMmcfX2VmFQ1OW/wflX9sFiAoWUvVXMK/wtrCTE4rfBeOaud9m",
            data: formData,
            success: function (response) {
                // Assuming Airtable returns a status or response indicating success
                if (response === 'success' || response.includes('200')) {
                    if (actionInput.length > 0) {
                        subscribeButton.html('SUBSCRIBE NOW');
                        const toastSubscribe = new bootstrap.Toast(successMsgSubscribe[0]);
                        toastSubscribe.show();
                    } else {
                        toast.show();
                        submitForm.html('Send Message');
                    }
                } else {
                    errtoast.show();
                    submitForm.html('Send Message');
                    subscribeButton.html('SUBSCRIBE NOW');
                }
            },
            error: function () {
                // Handle any errors
                errtoast.show();
                submitForm.html('Send Message');
                subscribeButton.html('SUBSCRIBE NOW');
            }
        });

        form.addClass('was-validated');
    });
});
