$(document).ready(function () {
    // Object containing the validation rules

    var myRules =
        {
            firstName:
                {
                    required: true
                },
            grade:
                {
                    required: true,
                    min: 5,
                    max: 8,
                    digits: true
                }
        };

    // Object containing the error messages
    var myMessages =
        {
            firstName:
                {
                    required: "First Name is required."
                },
            grade:
                {
                    required: "Grade is required",
                    min: "Too small",
                    max: "Too big",
                    digits: "Must be numbers"
                }

        };

    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages,
        }
    );

    function runMyProgram() {
        $("form").submit(runMyProgram);
        var firstName = $("input[name=firstName]").val();
        var grade = $("input[name=grade]").val();

        $("#message").text("You have registered " + firstName + " for grade " + grade + " camp!");
    }

});