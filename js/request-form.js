
$(function () {
    function after_form_submitted(data) {
        if (data.result == 'success') {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors, function (key, val) {
                $('#error_message ul').append('<li>' + key + ':' + val + '</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

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

        }//else
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

        var subjects = $("input#subjects").val();
        var location = $("input#location").val();
        var fname = $("input#first-name").val();
        var lname = $("input#last-name").val();
        var email = $("input#email").val();
        var phone = $("input#phone").val();
        var message = $("textarea#message").val();
        var freq = $("input[name='frequency']:checked").val();
        var delivery = $("input[name='delivery']:checked").val();
        var name =  fname + " " + lname;


        $.ajax({
            url: "https://getsimpleform.com/messages/ajax?form_api_token=437c648741436f4156d4a081cbc1a2df",
            dataType: "jsonp",
            //data: $form.serialize(),
            data: {
                "Title": "Tutor Request from "+name+"  in "+location+" via tutorinterventions.co.uk",
                "Name": name,
                "Subjects": subjects || "Not indicated",
                "Location": location,
                "Frequency": freq || "Not indicated",
                "Delivery": delivery || "Not indicated",
                "Details": message,
                "Phone": phone,
                "Email": email
            },
            success: after_form_submitted
       });

    });
});
