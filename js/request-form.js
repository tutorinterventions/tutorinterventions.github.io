
$(function () {
    
    $('#contactForm').on('hidden.bs.modal', function (e) {
        $('form#request-tutor').show();
        $('#success_message').hide();
        $('#error_message').hide();
    });
    
    function after_form_submitted(data) {
        if (data.success) {
            $('form#request-tutor').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors, function (key, val) {
                $('#error_message ul').append('<li>' + key + ':' + val + '</li>');
            });
            $('form#request-tutor').hide();
            $('#success_message').hide();
            $('#error_message').show();

        }//else
        //reverse the response on the button
        $('button[type="button"]', $form).each(function () {
            $btn = $(this);
            label = $btn.prop('orig_label');
            if (label) {
                $btn.prop('type', 'submit');
                $btn.text(label);
                $btn.prop('orig_label', '');
            }
        });
    }

    $('#request-tutor').submit(function (e) {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function () {
            $btn = $(this);
            $btn.prop('type', 'button');
            $btn.prop('orig_label', $btn.text());
            $btn.text('Sending ...');
        });

        var name = $form.find("#Name").val();
        $form.find("#Title").val("Tutor Request from " + name + " via tutorinterventions.co.uk");

        $.ajax({
            url: "https://getsimpleform.com/messages/ajax?form_api_token=437c648741436f4156d4a081cbc1a2df",
            dataType: "jsonp",
            data: $form.serialize(),
            success: after_form_submitted
        });

    });
});
