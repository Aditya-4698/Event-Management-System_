//jquery
    //focusout
    $(function () {
      // Common focusout validation
      $("#venueName,#capacity,#contactNo,#altContact,#state,#district,#pinCode,#address,#customerid,#customername").on('focusout', function () {
        let v = $(this).val();
        if (v.length == 0) {
          $(this).val("field is mandatory");
          $(this).css({ "border": "2px solid red", "color": "red" });
        }
      });

      // Focus in: clear placeholder
      $("#venueName,#capacity,#contactNo,#altContact,#state,#district,#pinCode,#address,#customerid,#customername").on('focusin', function () {
        let v = $(this).val();
        if (v == "field is mandatory") {
          $(this).val("");
          $(this).css({ "border": "2px solid black", "color": "black" });
        }
      });

      // Pincode validation (only digits, max 6)
      $('#pinCode').on("keydown", function (e) {
        let ch = e.which;
        $(this).siblings("span").text("");

        // Allow only digits + Tab + Backspace + Delete + Arrow keys
        if (!((ch >= 48 && ch <= 57) || (ch >= 96 && ch <= 105) || ch == 8 || ch == 46 || ch == 9 || (ch >= 37 && ch <= 40))) {
          $(this).siblings('span').text("*Only digits are allowed!");
          $(this).siblings('span').css("color", "red");
          return false;
        }
        // Max length = 6 digits
        else if ($(this).val().length >= 6 && ch != 8 && ch != 46) {
          $(this).siblings('span').text("Maximum 6 digits are allowed!");
          $(this).siblings('span').css("color", "red");
          return false;
        }
      });

      // Alphabet-only fields
      $("#venueName,#state,#district").on('keydown', function (e) {
        let ch = e.which;
        $(this).siblings('span').text("");

        // Allow alphabets, space, backspace, tab
        if (!((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || ch == 32 || ch == 9 || ch == 8)) {
          $(this).siblings('span').text("*Only alphabets and space allowed!");
          $(this).siblings('span').css("color", "red");
          return false;
        }
      });
      // For address → allow alphabets, numbers, space, comma, dot, backspace, tab
      $("#address").on('keydown', function (e) {
        let ch = e.which;
        $(this).siblings('span').text("");

        // Allow alphabets, numbers, space, comma(188), dot(190), backspace, tab
        if (!((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || (ch >= 48 && ch <= 57) || ch == 32 || ch == 188 || ch == 190 || ch == 9 || ch == 8)) {
          $(this).siblings('span').text("*Only alphabets, numbers, space, comma, dot allowed!");
          $(this).siblings('span').css("color", "red");
          return false;
        }
      });

      // for contact number validation
      $('#contactNo,#altContact').on('keydown', function (e) {
        let ch = e.which;
        $(this).siblings('span').text("");

        // Allow digits (top row & numpad), backspace, delete, arrows, tab
        if (!((ch >= 48 && ch <= 57) || (ch >= 96 && ch <= 105) || ch == 8 || ch == 46 || ch == 9 || (ch >= 37 && ch <= 40))) {
          $(this).siblings('span').text("*Only digits are allowed!");
          $(this).siblings('span').css("color", "red");
          return false;
        }

        // Max length 10 digits
        if ($(this).val().length >= 10 && (ch >= 48 && ch <= 57 || ch >= 96 && ch <= 105)) {
          $(this).siblings('span').text("*Maximum 10 digits are allowed!");
          $(this).siblings('span').css("color", "red");
          return false;
        }
      });


      // For capacity validation (max 5 digits)
      $('#capacity').on('keydown', function (e) {
        let ch = e.which;
        $(this).siblings('span').text("");

        // Allow only digits, backspace, delete, arrows, tab
        if (!((ch >= 48 && ch <= 57) || (ch >= 96 && ch <= 105) || ch == 8 || ch == 46 || ch == 9 || (ch >= 37 && ch <= 40))) {
          $(this).siblings('span').text("*Only digits are allowed!");
          $(this).siblings('span').css("color", "red");
          return false;
        }

        // Max length 5 digits
        if ($(this).val().length >= 5 && ((ch >= 48 && ch <= 57) || (ch >= 96 && ch <= 105))) {
          $(this).siblings('span').text("*Maximum 5 digits are allowed!");
          $(this).siblings('span').css("color", "red");
          return false;
        }
      });

    });

    // Capacity validation (max 5 digits, no leading 0)
$('#capacity').on('input', function () {
  let val = $(this).val();
  $(this).siblings('span').text("");

  // Remove non-digits
  if (!/^\d*$/.test(val)) {
    $(this).val(val.replace(/\D/g, ''));
    $(this).siblings('span').text("*Only digits are allowed!");
    $(this).siblings('span').css("color", "red");
    return;
  }

  // Not allow leading 0
  if (val.length > 0 && val.startsWith("0")) {
    $(this).val(val.replace(/^0+/, "")); // remove leading zeros
    $(this).siblings('span').text("*Leading 0 not allowed!");
    $(this).siblings('span').css("color", "red");
    return;
  }

  // Max 5 digits
  if (val.length > 5) {
    $(this).val(val.slice(0, 5));
    $(this).siblings('span').text("*Maximum 5 digits are allowed!");
    $(this).siblings('span').css("color", "red");
    return;
  }
});