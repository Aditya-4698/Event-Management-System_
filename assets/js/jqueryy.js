$(document).ready(function () {

    // Field Selectors
    const mandatoryFields = "#venuename,#address,#dist,#state,#pincode,#contact,#alt_cont,#categname,#sername,#vistname,#custname,#adhar,#eventname,#cost,#capacity,#amt,#balance,#description,#gallery";
    const alphabetOnlyFields = "#venuename,#dist,#state,#categname,#sername,#vistname,#custname,#eventname,#exampleselect";
    const only10digitsfield = "#contact,#alt_cont";
    const pin6digits = "#pincode";
    const adhar12digits = "#adhar";
    const capacity = "#capacity";
    const address = "#address,#description";
    const cost = "#cost,#amt,#balance";

    /*--------------------------------------
     * 1. Mandatory field check
     --------------------------------------*/
    $(mandatoryFields).on('focusout', function () {
        let value = $(this).val().trim();

        if (value.length === 0) {
            $(this).val("Field is mandatory");
            $(this).css({ "border": "1px solid red", "color": "red" });
        }
    });

    $(mandatoryFields).on('focus', function () {
        if ($(this).val() === "Field is mandatory") {
            $(this).val("");
            $(this).css({ "border": "1px solid black", "color": "green" });
        }
    });


    /*--------------------------------------
     * 2. Only alphabets and spaces
     --------------------------------------*/

    $(alphabetOnlyFields).on("keydown", function (e) {
        const ch = e.which;
        const pos = this.selectionStart;
        const currentVal = $(this).val();
        const errorSpan = $(this).siblings('span');
        errorSpan.text("");

        // Prevent starting with space
        if (pos === 0 && ch === 32) {
            errorSpan.text("*Cannot start with a space!").css("color", "red");
            return false;
        }

        // Prevent double spaces
        if (ch === 32 && currentVal.charAt(pos - 1) === " ") {
            errorSpan.text("*Cannot have double spaces!").css("color", "red");
            return false;
        }

        // Allowed keys
        const controlKeys = [8, 9, 13, 37, 38, 39, 40, 46];
        if ((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || ch === 32 || controlKeys.includes(ch)) {
            return true;
        } else {
            errorSpan.text("*Only alphabets and space allowed!").css("color", "red");
            return false;
        }
    });


    /*--------------------------------------
     * 3. Phone Numbers (10 digits only)
     --------------------------------------*/
    $(only10digitsfield).on('keydown', function (e) {
        let ch = e.which;
        const currentVal = $(this).val();
        const errorSpan = $(this).siblings('span');
        errorSpan.text("");

        if (currentVal.length === 0 && (ch === 32 || ch === 48)) {
            errorSpan.text("*Cannot start with a space or 0!").css("color", "red");
            return false;
        }

        const controlKeys = [8, 9, 37, 38, 39, 40, 46];
        if (controlKeys.includes(ch)) return true;

        if (ch >= 48 && ch <= 57) {
            if (currentVal.length >= 10) {
                errorSpan.text("*Maximum 10 digits allowed!").css("color", "red");
                return false;
            }
            return true;
        } else {
            errorSpan.text("*Only digits allowed!").css("color", "red");
            return false;
        }
    });

    /*--------------------------------------
     * 4. Pin Code (6 digits only)
     --------------------------------------*/
    $(pin6digits).on('keydown', function (e) {
        let ch = e.which;
        const currentVal = $(this).val();
        const errorSpan = $(this).siblings('span');
        errorSpan.text("");

        if (currentVal.length === 0 && ch === 32) {
            errorSpan.text("*Cannot start with a space!").css("color", "red");
            return false;
        }

        const controlKeys = [8, 9, 37, 38, 39, 40, 46];
        if (controlKeys.includes(ch)) return true;

        if (ch >= 48 && ch <= 57) {
            if (currentVal.length >= 6) {
                errorSpan.text("*Maximum 6 digits allowed!").css("color", "red");
                return false;
            }
            return true;
        } else {
            errorSpan.text("*Only digits allowed!").css("color", "red");
            return false;
        }
    });

    /*--------------------------------------
     * 5. Aadhar (12 digits only)
     --------------------------------------*/
    $(adhar12digits).on('keydown', function (e) {
        let ch = e.which;
        const currentVal = $(this).val();
        const errorSpan = $(this).siblings('span');
        errorSpan.text("");

        if (currentVal.length === 0 && ch === 32) {
            errorSpan.text("*Cannot start with a space!").css("color", "red");
            return false;
        }

        const controlKeys = [8, 9, 37, 38, 39, 40, 46];
        if (controlKeys.includes(ch)) return true;

        if (ch >= 48 && ch <= 57) {
            if (currentVal.length >= 12) {
                errorSpan.text("*Maximum 12 digits allowed!").css("color", "red");
                return false;
            }
            return true;
        } else {
            errorSpan.text("*Only digits allowed!").css("color", "red");
            return false;
        }
    });

    /*--------------------------------------
     * 6. cost
     --------------------------------------*/

    $(cost).on('keydown', function (e) {
        let ch = e.which;
        const currentVal = $(this).val();
        const errorSpan = $(this).siblings('span');
        errorSpan.text("");

        if (currentVal.length === 0 && ch === 32) {
            errorSpan.text("*Cannot start with a space!").css("color", "red");
            return false;
        }

        const controlKeys = [8, 9, 37, 38, 39, 40, 46];
        if (controlKeys.includes(ch)) return true;

        if (ch >= 48 && ch <= 57) {
            if (currentVal.length >= 10) {
                errorSpan.text("*Maximum 10 digits allowed!").css("color", "red");
                return false;
            }
            return true;
        } else {
            errorSpan.text("*Only digits allowed!").css("color", "red");
            return false;
        }
    });


    /*--------------------------------------
     * 6. Address
     --------------------------------------*/

    $(address).on("keydown", function (e) {
        let ch = e.which;
        const pos = this.selectionStart;
        const currentVal = $(this).val();
        const errorSpan = $(this).siblings('span');
        errorSpan.text("");

        if (pos === 0 && ch === 32) {
            errorSpan.text("*Cannot start with a space!").css("color", "red");
            return false;
        }

        if (ch === 32 && currentVal.charAt(pos - 1) === " ") {
            errorSpan.text("*Cannot use double spaces!").css("color", "red");
            return false;
        }

        const controlKeys = [8, 9, 37, 38, 39, 40, 46];
        if (controlKeys.includes(ch)) return true;

        if ((ch >= 48 && ch <= 57) || (ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || ch === 32 || ch === 44 || ch === 46 || ch === 45 || ch === 47 || ch === 35) {
            return true;
        } else {
            errorSpan.text("*Invalid character!").css("color", "red");
            return false;
        }
    });

    /*--------------------------------------
     * 8. select category
     --------------------------------------*/

    $("#exampleselect").on("focusout", function () {
        v = $(this).val();
        if (v == "") {
            $(this).css("border", "2px solid red");
        }
    });
    $("#exampleselect").on("focus", function () {
        $(this).css("border", "2px solid black");
    });


    /*--------------------------------------
     * 7.Submit
     --------------------------------------*/

    $("#submit").on("click", function (e) {
    e.preventDefault();

    let isValid = true;
    let firstInvalidField = null;

    $(mandatoryFields).each(function () {
        const input = $(this);
        const value = input.val().trim();
        const errorSpan = input.siblings('span');

        errorSpan.text("");
        if (value === "" || value === "Field is mandatory") {
            errorSpan.text("*Field is mandatory").css({
                "color": "red","font-size": "13px","font-weight": "light"
            });

            input
                .removeClass("success")
                .addClass("error")
                .css({"border": "1px solid red","color": "red"
                });

            if (!firstInvalidField) {
                firstInvalidField = input;
            }

            isValid = false;
        } else {
  
            input
                .removeClass("error")
                .addClass("success")
                .css({"border": "1px solid green","color": "green"
                });
        }
    });

    const selectField = $("#exampleselect");
    if (selectField.val() === "") {
        selectField
            .removeClass("success")
            .addClass("error")
            .css("border", "1px solid red");

        if (!firstInvalidField) {
            firstInvalidField = selectField;
        }

        isValid = false;
    } else {
        selectField
            .removeClass("error")
            .addClass("success")
            .css("border", "1px solid green");
    }

    if (firstInvalidField) {
        firstInvalidField.focus();
    }
    if (isValid) {
        alert("Form submitted successfully!");
        $("#myForm").submit();
    } else {
        console.log("Validation failed, form not submitted");
    }
});

});

