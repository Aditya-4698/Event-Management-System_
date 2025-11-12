$(document).ready(function () {

    // Field Selectors
    const mandatoryFields = "#name,#venuename,#address,#dist,#state,#pincode,#contact,#alt_cont,#categname,#sername,#vistname,#custname,#adhar,#eventname,#cost,#capacity,#amt,#balance,#description,#gallery,#date";
    const alphabetOnlyFields = "#name,#role,#country,#venuename,#dist,#state,#categname,#sername,#vistname,#custname,#eventname,#exampleselect";
    const only10digitsfield = "#contact,#alt_cont";
    const pin6digits = "#pincode";
    const adhar12digits = "#adhar";
    const capacity = "#capacity";
    const address = "#address,#description,#address";
    const cost = "#cost,#amt,#Damt,#balance";
    const emailField = "#email";

    /*--------------------------------------
     * 1. Mandatory field check
     --------------------------------------*/
    $(mandatoryFields).on('focusout', function () {
        let value = $(this).val().trim();

        if (value.length === 0) {
            $(this).val("");
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
        const $this = $(this);
        const ch = e.which;
        const pos = this.selectionStart;
        const currentVal = $this.val();

        $this.next('span').text("");

        if (pos === 0 && ch === 32) {
            $this.next('span').text("*Cannot start with a space!").css("color", "red");
            return false;
        }

        if (ch === 32 && currentVal.charAt(pos - 1) === " ") {
            $this.next('span').text("*Cannot have double spaces!").css("color", "red");
            return false;
        }

        const controlKeys = [8, 9, 13, 37, 38, 39, 40, 46];


        if ((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || ch === 32 || controlKeys.includes(ch)) {
            return true;
        } else {

            $this.next('span').text("*Only alphabets and space allowed!").css("color", "red");
            return false;
        }
    });



    /*--------------------------------------
     * 3. Phone Numbers (10 digits only)
     --------------------------------------*/
    $(only10digitsfield).on('keydown', function (e) {
        const $this = $(this);
        const currentVal = $this.val();
        const key = e.key;

        $this.next('span').text("");

        const controlKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Delete"];

        if (controlKeys.includes(key)) return true;

        if (currentVal.length === 0 && key === " ") {
            $this.next('span').text("*Cannot start with a space!").css("color", "red");
            return false;
        }

        if (!/^[0-9]$/.test(key)) {
            $this.next('span').text("*Only digits allowed!").css("color", "red");
            return false;
        }

        if (currentVal.length >= 10) {
            $this.next('span').text("*Maximum 10 digits allowed!").css("color", "red");
            return false;
        }

        return true;
    });

    $(only10digitsfield).on('blur', function () {
        const $this = $(this);
        const currentVal = $this.val();

        if (!/^\d{10}$/.test(currentVal)) {
            $this.next('span').text("*Exactly 10 digits required!").css("color", "red");
        } else {
            $this.next('span').text("");
        }
    });


    /*--------------------------------------
     * 4. Pin Code (6 digits only)
     --------------------------------------*/
    $(pin6digits).on('keydown', function (e) {
        const $this = $(this); // cache current input
        const currentVal = $this.val();
        const key = e.key;

        $this.next('span').text("");

        const controlKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Delete"];

        if (controlKeys.includes(key)) return true;

        if (currentVal.length === 0 && key === " ") {
            $this.next('span').text("*Cannot start with a space!").css("color", "red");
            return false;
        }

        if (!/^[0-9]$/.test(key)) {
            $this.next('span').text("*Only digits allowed!").css("color", "red");
            return false;
        }

        if (currentVal.length >= 6) {
            $this.next('span').text("*Maximum 6 digits allowed!").css("color", "red");
            return false;
        }

        return true;
    });

    $(pin6digits).on('blur', function () {
        const $this = $(this);
        const currentVal = $this.val();


        if (!/^\d{6}$/.test(currentVal)) {
            $this.next('span').text("*Exactly 6 digits required!").css("color", "red");
        } else {
            $this.next('span').text("");
        }
    });

    /*--------------------------------------
     * 4. Capacity (MAX 8 digits)
     --------------------------------------*/
    $(capacity).on('keydown', function (e) {
        const $this = $(this);
        const currentVal = $this.val();
        const key = e.key;

        $this.next('span').text("");

        const controlKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Delete"];

        if (controlKeys.includes(key)) return true;

        if (currentVal.length === 0 && key === " ") {
            $this.next('span').text("*Cannot start with a space!").css("color", "red");
            return false;
        }

        if (!/^[0-9]$/.test(key)) {
            $this.next('span').text("*Only digits allowed!").css("color", "red");
            return false;
        }

        if (currentVal.length >= 8) {
            $this.next('span').text("*Maximum 8 digits allowed!").css("color", "red");
            return false;
        }

        return true;
    });

    $(capacity).on('blur', function () {
        const $this = $(this);
        const currentVal = $this.val();


        // if (!/^\d{8}$/.test(currentVal)) {
        //     $this.next('span').text("*Exactly 8 digits required!").css("color", "red");
        // } else {
        //     $this.next('span').text("");
        // }
    });


    /*--------------------------------------
     * 5. Aadhar (12 digits only)
     --------------------------------------*/

    $(adhar12digits).on('keydown', function (e) {
        const $this = $(this);
        const currentVal = $this.val();
        const key = e.key;


        $this.next('span').text("");

        const controlKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Delete"];


        if (controlKeys.includes(key)) return true;


        if (currentVal.length === 0 && key === " ") {
            $this.next('span').text("*Cannot start with a space!").css("color", "red");
            return false;
        }


        if (!/^[0-9]$/.test(key)) {
            $this.next('span').text("*Only digits allowed!").css("color", "red");
            return false;
        }


        if (currentVal.length >= 12) {
            $this.next('span').text("*Maximum 12 digits allowed!").css("color", "red");
            return false;
        }

        return true;
    });

    $(adhar12digits).on('blur', function () {
        const $this = $(this);
        const currentVal = $this.val();


        if (!/^\d{12}$/.test(currentVal)) {
            $this.next('span').text("*Exactly 12 digits required!").css("color", "red");
        } else {
            $this.next('span').text("");
        }
    });



    /*--------------------------------------
     * 6. cost
     --------------------------------------*/

    $(cost).on('keydown', function (e) {
        const $this = $(this);
        const currentVal = $this.val();
        const key = e.key;

        $this.next('span').text("");

        const controlKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Delete"];


        if (controlKeys.includes(key)) return true;

        if (currentVal.length === 0 && key === " ") {
            $this.next('span').text("*Cannot start with a space!").css("color", "red");
            return false;
        }

        if (!/^[0-9]$/.test(key)) {
            $this.next('span').text("*Only digits allowed!").css("color", "red");
            return false;
        }

        if (currentVal.length >= 10) {
            $this.next('span').text("*Maximum 10 digits allowed!").css("color", "red");
            return false;
        }

        return true;
    });

    $(cost).on('blur', function () {
        const $this = $(this);
        const currentVal = $this.val();

        // if (!/^\d{10}$/.test(currentVal)) {
        //     $this.next('span').text("*Exactly 10 digits required!").css("color", "red");
        // } else {
        //     $this.next('span').text("");
        // }
    });


    /*--------------------------------------
     * 7. Address
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

        const controlKeys = [8, 9, 37, 38, 39, 40, 46, 188];
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
     * 9. Email Validation
     --------------------------------------*/
    $(emailField).on('blur', function () {
        const $this = $(this);
        const value = $this.val().trim();
        const errorSpan = $this.next('span');
        errorSpan.text("");

        // Email Regex Pattern
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (value === "") {
            errorSpan.text("*Email is required!").css("color", "red");
            $this.css("border", "1px solid red");
        } else if (!emailPattern.test(value)) {
            errorSpan.text("*Invalid email format!").css("color", "red");
            $this.css("border", "1px solid red");
        } else {
            errorSpan.text("");
            $this.css("border", "1px solid green");
        }
    });

    $(emailField).on('focus', function () {
        $(this).css("border", "1px solid black");
        $(this).next('span').text("");
    });


    /*--------------------------------------
     * 10. Password Validation
     --------------------------------------*/
    const passwordField = "#password"; 

    $(passwordField).on('blur', function () {
        const $this = $(this);
        const value = $this.val().trim();
        const errorSpan = $this.next('span');
        errorSpan.text("");

        // At least 8 characters, one uppercase, one lowercase, one digit, one special character
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{8,}$/;

        if (value === "") {
            errorSpan.text("*Password is required!").css("color", "red");
            $this.css("border", "1px solid red");
        } else if (!passwordPattern.test(value)) {
            errorSpan.html("*Password must have:<br>- At least 8 characters<br>- One uppercase letter<br>- One lowercase letter<br>- One number<br>- One special character")
                .css("color", "red");
            $this.css("border", "1px solid red");
        } else {
            errorSpan.text("");
            $this.css("border", "1px solid green");
        }
    });

    $(passwordField).on('focus', function () {
        $(this).css("border", "1px solid black");
        $(this).next('span').text("");
    });


    /*--------------------------------------
        * 11.Refresh/Clear All Fields
        --------------------------------------*/

    $("#refresh").on("click", function (e) {
        e.preventDefault();

        // Optional confirmation before clearing
        if (!confirm("Do you really want to refresh and clear all data?")) {
            return;
        }

        // Clear all mandatory field styles and error messages
        $(mandatoryFields).filter(":visible").each(function () {
            const input = $(this);
            const errorSpan = input.siblings("span");

            // Clear text, color, and border
            input.val("")
                .removeClass("error success")
                .css({ "border": "", "color": "" });

            // Clear error messages
            errorSpan.text("");
        });

        // Optional: reset entire form if you have a <form> tag
        $("form")[0].reset();

        // Optional: clear any stored session/local data
        sessionStorage.clear();
        localStorage.clear();

        alert("All fields have been cleared!");
    });



    /*--------------------------------------
     * 12.Submit
     --------------------------------------*/

    $(document).ready(function () {
        // ✅ AJAX Function
        function sendAjaxRequest(url, data, successCallback, errorCallback, method = "POST") {
            $.ajax({
                url: url,
                type: method,
                data: data,
                success: function (data) {
                    // console.log("✅ Success from", url, ":", data);
                    if (typeof successCallback === "function") successCallback(data);
                },
                error: function (xhr, status, error) {
                    console.error("❌ Error from", url, ":", status, error);
                    if (typeof errorCallback === "function") errorCallback(xhr, status, error);
                }
            });
        }



        // ✅ Form Submit Click Handler
        $("#submit").on("click", function (e) {
            e.preventDefault();

            // ✅ Validation
            let isValid = true;
            let firstInvalidField = null;

            $(mandatoryFields).filter(":visible").each(function () {

                const input = $(this);
                const value = input.val().trim();
                const errorSpan = input.siblings('span');

                errorSpan.text("");

                if (value === "" || value === "Field is mandatory") {
                    errorSpan.text("*Field is mandatory").css({
                        "color": "red", "font-size": "13px", "font-weight": "light"
                    });

                    input
                        .removeClass("success")
                        .addClass("error")
                        .css({ "border": "1px solid red", "color": "red" });

                    if (!firstInvalidField) firstInvalidField = input;
                    isValid = false;
                } else {
                    input
                        .removeClass("error")
                        .addClass("success")
                        .css({ "border": "1px solid green", "color": "green" });
                }
            });

            const selectField = $("#exampleselect");
            if (selectField.length && selectField.val() === "") {
                selectField
                    .removeClass("success")
                    .addClass("error")
                    .css("border", "1px solid red");

                if (!firstInvalidField) firstInvalidField = selectField;
                isValid = false;
            } else {
                selectField
                    .removeClass("error")
                    .addClass("success")
                    .css("border", "1px solid green");
            }

            if (firstInvalidField) firstInvalidField.focus();

            if (!isValid) {
                console.log("Validation failed ❌, form not submitted");
                return; // stop here
            }


            $(document).ready(function () {

                $("#searchBtn").click(function (e) {
                    e.preventDefault();

                    // All field IDs
                    const fields = {
                        venueid: $("#venueid").val().trim(),
                        // venuename: $("#venuename").val().trim(),
                        // city: $("#city").val().trim(),
                        // categoryid: $("#categoryid").val().trim(),
                        // categoryname: $("#categoryname").val().trim(),
                        // serviceid: $("#serviceid").val().trim(),
                        // category: $("#category").val().trim(),
                        // eventname: $("#eventname").val().trim()
                    };

                    // ✅ Check if all fields are empty
                    const allEmpty = Object.values(fields).every(v => v === "");
                    if (allEmpty) {
                        Swal.fire({
                            icon: "warning",
                            title: "Please enter at least one search field!",
                            timer: 2000,
                            showConfirmButton: false
                        });
                        return false;
                    }

                    // ✅ Priority: If venueid filled, ignore others
                    let dataToSend = {};
                    if (fields.venueid !== "") {
                        dataToSend = { venueid: fields.venueid };
                    } else {
                        // else send all non-empty fields
                        for (let key in fields) {
                            if (fields[key] !== "") {
                                dataToSend[key] = fields[key];
                            }
                        }
                    }

                    // ✅ AJAX call for search
                    $.ajax({
                        url: "venue-search.py",
                        method: "POST",
                        data: dataToSend,
                        success: function (data) {
                            $("#searchResults").html(data);
                        },
                        error: function () {
                            Swal.fire({
                                icon: "error",
                                title: "Search failed!",
                                text: "Something went wrong while searching."
                            });
                        }
                    });
                });

            });


            /*--------------------------------------
            DATA COLLECTION FOR ALL SECTIONS
             --------------------------------------*/

            let venue = $("#venuename").val(),
                address = $("#address").val(),
                dist = $("#dist").val(),
                pin = $("#pincode").val(),
                state = $("#state").val(),
                cont = $("#contact").val(),
                altcont = $("#alt_cont").val(),
                catname = $("#categname").val(),
                sername = $("#sername").val(),
                visitname = $("#vistname").val(),
                custname = $("#custname").val(),
                adhar = $("#adhar").val(),
                eventname = $("#eventname").val(),
                cost = $("#cost").val(),
                capacity = $("#capacity").val(),
                amt = $("#amt").val(),
                Damt = $("#Damt").val(),
                bal = $("#balance").val(),
                description = $("#description").val(),
                gallery = $("#gallery").val(),
                date = $("#date").val(),
                evtdate = $("#Evtdate").val(),
                start = $("#Sdate").val(),
                end = $("#Edate").val(),
                eventid = $("#EId").val(),
                custid = $("#CId").val(),
                venueid = $("#VId").val(),
                serid = $("#SId").val(),
                visitid = $("#VistId").val(),
                stime = $("#Stime").val(),
                etime = $("#Etime").val();
                catid = $("#catid").val();
                Event_serid = $("#ESId").val();
                Createdate = $("#Cdate").val();
                Rating = $("#Rating").val();
                Status = $("#Status").val();
                PId = $("#PId").val();
                Transaction = $("#Tdate").val();
                mode = $("#mode").val();
                feedbackid = $("#FId").val();

            const eventData = {
                EId: eventid,
                eventname: eventname,
                CId: custid,
                VId: venueid,
                SId: serid,
                cost: cost,
                Evtdate: evtdate,
                Sdate: start,
                Edate: end,
                Stime: stime,
                Etime: etime,
                capacity: capacity,
                description: description
            };

            const eventupdateData = {
                EId: eventid,
                eventname: eventname,
                CId: custid,
                VId: venueid,
                SId: serid,
                cost: cost,
                Evtdate: evtdate,
                Sdate: start,
                Edate: end,
                Stime: stime,
                Etime: etime,
                capacity: capacity,
                description: description
            };

            const eventlistData = {
                EId: eventid,
                venuename: venue,
                SId: serid
            };

            const visitorData = {
                VistId: visitid,
                vistname: visitname,
                address: address,
                state: state,
                dist: dist,
                pincode: pin,
                contact: cont,
                alt_cont: altcont,
                description: description
            };

            const visitorlistData = {
                VistId: visitid,
                vistname: visitname,
                description: description
            };

            const categoryData = {
                categname: catname,
                catid: catid,
                date: date,
                description: description
            };

            const categoryupdateData = {
                categname: catname,
                catid: catid,
                date: date,
                description: description
            };

            const categorylistData = {
                catid: catid,
                categname: catname,
            };

            const customerdata = {
                CId: custid,
                custname: custname,
                contact: cont,
                alt_cont: altcont,
                dist: dist,
                state: state,
                pincode: pin,
                address: address,
                adhar: adhar,
                gallery: gallery
            };

            const customerupdatedata = {
                CId: custid,
                custname: custname,
                contact: cont,
                alt_cont: altcont,
                dist: dist,
                state: state,
                pincode: pin,
                address: address,
                adhar: adhar,
                gallery: gallery
            };

            const customerlistdata = {
                CId: custid,
                custname: custname,
                dist: dist,
                state: state,
                pincode: pin,
                contact: cont,
            };

            const eventserviceData = {
                ESId: Event_serid,
                SId: serid,
                Cdate: Createdate
            };
            const eventserviceupdateData = {
                ESId: Event_serid,
                SId: serid,
                Cdate: Createdate
            };

            const eventservicelistData = {
                ESId: Event_serid,
                SId: serid,
                Cdate: Createdate
            };

            const feedbackData = {
                FId: feedbackid,
                eventname: eventname,
                custname: custname,
                Rating: Rating,
                date: date,
                address: address
            };

            const feedbacklistData = {
                FId: feedbackid,
                eventname: eventname,
                custname: custname
            };

            const paymentData = {
                PId: PId,
                EId: eventid,
                custname: custname,
                amt: amt,
                Damt: Damt,
                mode: mode,
                Status: Status,
                Tdate: Transaction,
                balance: bal
            };

            const paymentupdateData = {
                PId: PId,
                EId: eventid,
                custname: custname,
                amt: amt,
                Damt: Damt,
                mode: mode,
                Status: Status,
                Tdate: Transaction,
                balance: bal
            };

            const paymentlistData = {
                PId: PId,
                EId: eventid,
                custname: custname,
                Tdate: Transaction
            };

            const serviceData = {
                SId: serid,
                mode: mode,
                eventname: eventname,
                description: description
            };
            const serviceupdateData = {
                SId: serid,
                mode: mode,
                eventname: eventname,
                description: description
            };

            const servicelistData = {
                SId: serid,
                mode: mode,
                categname: catname
            };

            const venueData = {
                VId: venueid,
                venuename: venue,
                address: address,
                state: state,
                dist: dist,
                pincode: pin,
                capacity: capacity,
                contact: cont,
                alt_cont: altcont,
                gallery: gallery
            };

            const venueupdateData = {
                VId: venueid,
                venuename: venue,
                address: address,
                state: state,
                dist: dist,
                pincode: pin,
                capacity: capacity,
                contact: cont,
                alt_cont: altcont,
                gallery: gallery
            };
            const venueListData = {
                VId: venueid,
                venuename: venue,
                address: address
            };

            // ✅ Detect which section you're currently on
            // Example: check a hidden field, tab id, or form section visibility
            let activeSection = "";

            if ($("#eventSection").is(":visible")) {
                activeSection = "event";
            } else if ($("#eventlistSection").is(":visible")) {
                activeSection = "eventlist";
            } else if ($("#eventupdateSection").is(":visible")) {
                activeSection = "eventupdate";
            } else if ($("#visitorSection").is(":visible")) {
                activeSection = "visitor";
            } else if ($("#visitorlistSection").is(":visible")) {
                activeSection = "visitorlist";
            } else if ($("#CategorySection").is(":visible")) {
                activeSection = "Category";
            } else if ($("#CategoryupdateSection").is(":visible")) {
                activeSection = "Categoryupdate";
            } else if ($("#customerSection").is(":visible")) {
                activeSection = "customer";
            } else if ($("#customerupdateSection").is(":visible")) {
                activeSection = "customerupdate";
            } else if ($("#customerlistSection").is(":visible")) {
                activeSection = "customerlist";
            } else if ($("#eventservice").is(":visible")) {
                activeSection = "eventservice";
            } else if ($("#eventservicelist").is(":visible")) {
                activeSection = "eventservicelist";
            } else if ($("#eventserviceupdate").is(":visible")) {
                activeSection = "eventserviceupdate";
            } else if ($("#feedbackSection").is(":visible")) {
                activeSection = "feedback";
            } else if ($("#feedbacklistSection").is(":visible")) {
                activeSection = "feedbacklist";
            } else if ($("#paymentSection").is(":visible")) {
                activeSection = "payment";
            } else if ($("#paymentupdateSection").is(":visible")) {
                activeSection = "paymentupdate";
            } else if ($("#paymentlistSection").is(":visible")) {
                activeSection = "paymentlist";
            } else if ($("#serviceSection").is(":visible")) {
                activeSection = "service";
            } else if ($("#serviceupdateSection").is(":visible")) {
                activeSection = "serviceupdate";
            } else if ($("#servicelistSection").is(":visible")) {
                activeSection = "servicelist";
            } else if ($("#venueSection").is(":visible")) {
                activeSection = "venue";
            } else if ($("#venuelistSection").is(":visible")) {
                activeSection = "venuelist";
            } else if ($("#venueupdateSection").is(":visible")) {
                activeSection = "venueupdate";
            } else if ($("#CategorylistSection").is(":visible")) {
                activeSection = "Categorylist";
            }



            // ✅ Send data based on active section
            if (activeSection === "event") {
                sendAjaxRequest("event.py", eventData, function (data) {
                    // console.log(data);
                    // alert("✅ Event data submitted successfully!");
                    data = data.trim();

                    if (parseInt(data.trim()) === 1) {
                        Swal.fire({
                            title: "Event Inserted!",
                            text: "The record was successfully Inserted.",
                            timer: 2000,
                            icon: "success"
                        });
                    } else {
                        Swal.fire({
                            title: "Inserting Failed",
                            icon: "error",
                            showConfirmButton: false
                        });
                    }
                });

            } else if (activeSection === "eventupdate") {
                sendAjaxRequest("Event-update.py", eventupdateData, function (data) {
                    // Trim whitespace in case Python adds newlines
                    // console.log(data)
                    data = data.trim();

                    if (parseInt(data.trim()) === 1) {
                        Swal.fire({
                            title: "Update Failed",
                            icon: "error",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            title: "Events Updated!",
                            text: "The record was successfully Updated.",
                            icon: "success"
                        });
                    }
                });
            } else if (activeSection === "eventlist") {
                sendAjaxRequest("eventlist.py", eventlistData, function (data) {
                    $('#res').html(data);
                    // console.log(data);

                    // alert("✅ Eventlist data submitted successfully!");
                    if (data == 1)
                        Swal.fire({
                            title: "submitted",
                            icon: "success",
                            draggable: true
                        });
                    $('.update').click(function (e) {
                        // console.log('kjhg');

                        e.preventDefault();
                        // Get the attribute values
                        const EId = $(this).attr('data-EId');
                        const eventname = $(this).attr('data-eventname');
                        const CId = $(this).attr('data-CId');
                        const VId = $(this).attr('data-VId');
                        const SId = $(this).attr('data-SId');
                        const cost = $(this).attr('data-cost');
                        const Evtdate = $(this).attr('data-Evtdate');
                        const Sdate = $(this).attr('data-Sdate');
                        const Edate = $(this).attr('data-Edate');
                        const Stime = $(this).attr('data-Stime');
                        const Etime = $(this).attr('data-Etime');
                        const capacity = $(this).attr('data-capacity');
                        const description = $(this).attr('data-description');
                        // Save them in localStorage
                        localStorage.setItem('EId', EId);
                        localStorage.setItem('eventname', eventname);
                        localStorage.setItem('CId', CId);
                        localStorage.setItem('VId', VId);
                        localStorage.setItem('SId', SId);
                        localStorage.setItem('cost', cost);
                        localStorage.setItem('Evtdate', Evtdate);
                        localStorage.setItem('Sdate', Sdate);
                        localStorage.setItem('Edate', Edate);
                        localStorage.setItem('Stime', Stime);
                        localStorage.setItem('Etime', Etime);
                        localStorage.setItem('capacity', capacity);
                        localStorage.setItem('description', description);

                        window.location.href = "Events-update.html"
                    });
                    $('.delete').click(function (e) {
                        e.preventDefault();
                        $(this).closest('tr').remove();
                        d = $(this).closest('tr')
                        $.ajax({
                            method: "POST",
                            url: "Event-update.py",
                            data: {
                                't': 'delete',
                                't1': d.find("td:eq(0)").text()

                            },
                            success: function (data) {
                                console.log(data)
                                // if(data=="Record successfully deleted")
                            }
                        });

                    });
                });
            } else if (activeSection === "visitor") {
                sendAjaxRequest("visitor.py", visitorData, function (data) {
                    // alert("✅ Visitor data submitted successfully!");
                    data = data.trim();

                    if (parseInt(data.trim()) === 1) {
                        Swal.fire({
                            title: "Inserting Failed",
                            icon: "error",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            title: "Visitor Inserted!",
                            text: "The record was successfully Inserted.",
                            icon: "success"
                        });
                    }
                });
            } else if (activeSection === "visitorlist") {
                sendAjaxRequest("visitorlist.py", visitorlistData, function (data) {
                    $('#res').html(data);
                    // alert("✅ Visitorlist data submitted successfully!");
                    if (data == 1)
                        Swal.fire({
                            title: "submitted",
                            icon: "success",
                            draggable: true
                        });
                });
            } else if (activeSection === "Categoryupdate") {
                sendAjaxRequest("category-update.py", categoryupdateData, function (data) {
                    // Trim whitespace in case Python adds newlines
                    data = data.trim();

                    if (parseInt(data.trim()) === 1) {
                        Swal.fire({
                            title: "Update Failed",
                            icon: "error",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            title: "Category Updated!",
                            text: "The record was successfully Updated.",
                            icon: "success"
                        });
                    }
                });
            } else if (activeSection === "Categorylist") {
                sendAjaxRequest("categorylist.py", categorylistData, function (data) {
                    $('#res').html(data);
                    if (data == 1)
                        Swal.fire({
                            title: "Done",
                            icon: "success",
                            draggable: true
                        });

                    // console.log(document.querySelectorAll('.update'));
                    $('.update').click(function (e) {
                        e.preventDefault();
                        // Get the attribute values
                        const catid = $(this).attr('data-catid');
                        const categname = $(this).attr('data-categname');
                        const date = $(this).attr('data-date');
                        const description = $(this).attr('data-description');
                        // const status = $(this).attr('data-status');

                        // Save them in localStorage
                        localStorage.setItem('catid', catid);
                        localStorage.setItem('categname', categname);
                        localStorage.setItem('date', date);
                        localStorage.setItem('description', description);
                        // localStorage.setItem('status', status);

                        window.location.href = "category-update.html"
                    });
                    $('.delete').click(function (e) {
                        e.preventDefault();
                        $(this).closest('tr').remove();
                        d = $(this).closest('tr')
                        $.ajax({
                            method: "POST",
                            url: "category-update.py",
                            data: {
                                't': 'delete',
                                't1': d.find("td:eq(0)").text()

                            },
                            success: function (data) {
                                console.log(data)
                                // if(data=="Record successfully deleted")
                            }
                        });

                    });
                });
            } else if (activeSection === "Category") {
                sendAjaxRequest("category.py", categoryData, function (data) {
                    // alert("✅ Customer data submitted successfully!");
                    //  data = data.trim();

                    if (parseInt(data.trim()) === 1) {
                        Swal.fire({
                            title: "Insert Failed",
                            icon: "error",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            title: "Category Inserted!",
                            text: "The record was successfully Inserted.",
                            icon: "success"
                        });
                    }
                });
            }
            else if (activeSection === "customer") {
                sendAjaxRequest("customer.py", customerdata, function (data) {
                    // alert("✅ Customer data submitted successfully!");
                    data = data.trim();

                    if (parseInt(data.trim()) === 1) {
                        Swal.fire({
                            title: "Inserting Failed",
                            icon: "error",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            title: "Customer Inserted!",
                            text: "The record was successfully Inserted.",
                            icon: "success"
                        });
                    }
                });
            } else if (activeSection === "customerlist") {
                sendAjaxRequest("customerlist.py", customerlistdata, function (data) {
                    $('#res').html(data);
                    if (data == 1)
                        Swal.fire({
                            title: "submitted",
                            icon: "success",
                            draggable: true
                        });
                    $('.update').click(function (e) {
                        e.preventDefault();
                        // Get the attribute values
                        const CId = $(this).attr('data-CId');
                        const custname = $(this).attr('data-custname');
                        const contact = $(this).attr('data-contact');
                        const alt_cont = $(this).attr('data-alt_cont');
                        const dist = $(this).attr('data-dist');
                        const state = $(this).attr('data-state');
                        const pincode = $(this).attr('data-pincode');
                        const address = $(this).attr('data-address');
                        const adhar = $(this).attr('data-adhar');
                        const gallery = $(this).attr('data-gallery');
                        // Save them in localStorage
                        localStorage.setItem('CId', CId);
                        localStorage.setItem('custname', custname);
                        localStorage.setItem('contact', contact);
                        localStorage.setItem('alt_cont', alt_cont);
                        localStorage.setItem('dist', dist);
                        localStorage.setItem('state', state);
                        localStorage.setItem('pincode', pincode);
                        localStorage.setItem('address', address);
                        localStorage.setItem('adhar', adhar);
                        localStorage.setItem('gallery', gallery);

                        window.location.href = "customer-update.html"
                    });
                    $('.delete').click(function (e) {
                        e.preventDefault();
                        $(this).closest('tr').remove();
                        d = $(this).closest('tr')
                        $.ajax({
                            method: "POST",
                            url: "customer-update.py",
                            data: {
                                't': 'delete',
                                't1': d.find("td:eq(0)").text()

                            },
                            success: function (data) {
                                console.log(data)
                                // if(data=="Record successfully deleted")
                            }
                        });

                    });
                });
            } else if (activeSection === "customerupdate") {
                sendAjaxRequest("customer-update.py", customerupdatedata, function (data) {
                    // Trim whitespace in case Python adds newlines
                    data = data.trim();
                    if (parseInt(data) === 1) {
                        Swal.fire({
                            title: "Customer Updated Failed!",
                            icon: "success",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            title: "Customer Updated!",
                            text: "The record was successfully updated.",
                            icon: "error"
                        });
                    }
                });
            } else if (activeSection === "eventservice") {
                sendAjaxRequest("event_service.py", eventserviceData, function (data) {
                    // alert("✅ Event_Service data submitted successfully!");
                    data = data.trim();

                    if (parseInt(data.trim()) === 1) {
                        Swal.fire({
                            title: "Inserting Failed",
                            icon: "error",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            title: " Inserted!",
                            text: "The record was successfully Inserted.",
                            icon: "success"
                        });
                    }
                });
            } else if (activeSection === "eventservicelist") {
                sendAjaxRequest("event_servicelist.py", eventservicelistData, function (data) {
                    $('#res').html(data);
                    if (data == 1)
                        Swal.fire({
                            title: "Done",
                            icon: "success",
                            draggable: true
                        });

                    // console.log(document.querySelectorAll('.update'));
                    $('.update').click(function (e) {
                        e.preventDefault();
                        // Get the attribute values
                        const Event_serid = $(this).attr('data-ESId');
                        const serid = $(this).attr('data-SId');
                        const Createdate = $(this).attr('data-Cdate');

                        // Save them in localStorage
                        localStorage.setItem('ESId', Event_serid);
                        localStorage.setItem('SId', serid);
                        localStorage.setItem('Cdate', Createdate);

                        window.location.href = "event_service-update.html"
                    });

                    $('.delete').click(function (e) {
                        e.preventDefault();
                        $(this).closest('tr').remove();
                        d = $(this).closest('tr')
                        $.ajax({
                            method: "POST",
                            url: "event_service-update.py",
                            data: {
                                't': 'delete',
                                't1': d.find("td:eq(0)").text()

                            },
                            success: function (data) {
                                console.log(data)
                                // if(data=="Record successfully deleted")
                            }
                        });

                    });
                });
            } else if (activeSection === "eventserviceupdate") {
                sendAjaxRequest("event_service-update.py", eventserviceupdateData, function (data) {
                    // Trim whitespace in case Python adds newlines
                    data = data.trim();
                    if (parseInt(data) === 1) {
                        Swal.fire({
                            title: " Failed!",
                            icon: "success",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            title: "Updated!",
                            text: "The record was successfully updated.",
                            icon: "error"
                        });
                    }
                });


            } else if (activeSection === "feedback") {
                sendAjaxRequest("feedback.py", feedbackData, function (data) {
                    // alert("✅ Feedback data submitted successfully!");
                    data = data.trim();

                    if (parseInt(data.trim()) === 1) {
                        Swal.fire({
                            title: "Inserting Failed",
                            icon: "error",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            title: "Feedback Inserted!",
                            text: "The record was successfully Inserted.",
                            icon: "success"
                        });
                    }
                });
            } else if (activeSection === "feedbacklist") {
                sendAjaxRequest("feedbacklist.py", feedbacklistData, function (data) {
                    // console.log(data);
                    $('#res').html(data);
                    // alert("✅ Feedbacklist data submitted successfully!");
                    if (data == 1)
                        Swal.fire({
                            title: "submitted",
                            icon: "success",
                            draggable: true
                        });
                });
            } else if (activeSection === "payment") {
                sendAjaxRequest("payment.py", paymentData, function (data) {
                    // alert("✅ Payment data submitted successfully!");
                    data = data.trim();

                    if (parseInt(data.trim()) === 1) {
                        Swal.fire({
                            title: "Inserting Failed",
                            icon: "error",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            title: "Payment Inserted!",
                            text: "The record was successfully Inserted.",
                            icon: "success"
                        });
                    }
                });
            } else if (activeSection === "paymentupdate") {
                sendAjaxRequest("payment-update.py", paymentupdateData, function (data) {
                    // console.log(data)
                    data = data.trim();

                    if (parseInt(data.trim()) === 1) {
                        Swal.fire({
                            title: "Update Failed",
                            icon: "error",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            title: "Payment Updated!",
                            text: "The record was successfully Updated.",
                            icon: "success"
                        });
                    }
                });
            } else if (activeSection === "paymentlist") {
                sendAjaxRequest("paymentlist.py", paymentlistData, function (data) {
                    $('#res').html(data);
                    // alert("✅ Paymentlist data submitted successfully!");
                    if (data == 1)
                        Swal.fire({
                            title: "submitted",
                            icon: "success",
                            draggable: true
                        });
                    $('.update').click(function (e) {
                        // console.log('kjhg');

                        e.preventDefault();
                        // Get the attribute values
                        const PId = $(this).attr('data-PId');
                        const EId = $(this).attr('data-EId');
                        const custname = $(this).attr('data-custname');
                        const amt = $(this).attr('data-amt');
                        const Damt = $(this).attr('data-Damt');
                        const mode = $(this).attr('data-mode');
                        const Status = $(this).attr('data-Status');
                        const Tdate = $(this).attr('data-Tdate');
                        const balance = $(this).attr('data-balance');

                        // Save them in localStorage
                        localStorage.setItem('PId', PId);
                        localStorage.setItem('EId', EId);
                        localStorage.setItem('custname', custname);
                        localStorage.setItem('amt', amt);
                        localStorage.setItem('Damt', Damt);
                        localStorage.setItem('mode', mode);
                        localStorage.setItem('Status', Status);
                        localStorage.setItem('Tdate', Tdate);
                        localStorage.setItem('balance', balance);

                        window.location.href = "payment-update.html"
                    });
                    $('.delete').click(function (e) {
                        e.preventDefault();
                        $(this).closest('tr').remove();
                        d = $(this).closest('tr')
                        $.ajax({
                            method: "POST",
                            url: "payment-update.py",
                            data: {
                                't': 'delete',
                                't1': d.find("td:eq(0)").text()

                            },
                            success: function (data) {
                                console.log(data)
                                // if(data=="Record successfully deleted")
                            }
                        });

                    });
                });
            } else if (activeSection === "service") {
                sendAjaxRequest("service.py", serviceData, function (data) {
                    // alert("✅ Service data submitted successfully!");
                    data = data.trim();

                    if (parseInt(data.trim()) === 1) {
                        Swal.fire({
                            title: "Inserting Failed",
                            icon: "error",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            title: "Service Inserted!",
                            text: "The record was successfully Inserted.",
                            icon: "success"
                        });
                    }
                });
            } else if (activeSection === "serviceupdate") {
                sendAjaxRequest("service-update.py", serviceupdateData, function (data) {
                    data = data.trim();

                    if (parseInt(data.trim()) === 1) {
                        Swal.fire({
                            title: "Update Failed",
                            icon: "error",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            title: "Service Updated!",
                            text: "The record was successfully Updated.",
                            icon: "success"
                        });
                    }
                });
            } else if (activeSection === "servicelist") {
                sendAjaxRequest("servicelist.py", servicelistData, function (data) {
                    $('#res').html(data);
                    // alert("✅ Servicelist data submitted successfully!");
                    if (data == 1)
                        Swal.fire({
                            title: "submitted",
                            icon: "success",
                            draggable: true
                        });
                    $('.update').click(function (e) {
                        // console.log('kjhg');

                        e.preventDefault();
                        // Get the attribute values
                        const SId = $(this).attr('data-SId');
                        const mode = $(this).attr('data-mode');
                        const eventname = $(this).attr('data-eventname');
                        const description = $(this).attr('data-description');


                        // Save them in localStorage
                        localStorage.setItem('SId', SId);
                        localStorage.setItem('mode', mode);
                        localStorage.setItem('eventname', eventname);
                        localStorage.setItem('description', description);

                        window.location.href = "services-update.html"
                    });
                    $('.delete').click(function (e) {
                        e.preventDefault();
                        $(this).closest('tr').remove();
                        d = $(this).closest('tr')
                        $.ajax({
                            method: "POST",
                            url: "service-update.py",
                            data: {
                                't': 'delete',
                                't1': d.find("td:eq(0)").text()

                            },
                            success: function (data) {
                                console.log(data)
                                // if(data=="Record successfully deleted")
                            }
                        });

                    });
                });
            } else if (activeSection === "venue") {
                sendAjaxRequest("venue.py", venueData, function (data) {
                    // alert("✅ Venue data submitted successfully!");
                    data = data.trim();

                    if (parseInt(data.trim()) === 1) {
                        Swal.fire({
                            title: "Inserting Failed",
                            icon: "error",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            title: "Venue Inserted!",
                            text: "The record was successfully Inserted.",
                            icon: "success"
                        });
                    }
                });
            } else if (activeSection === "venueupdate") {
                sendAjaxRequest("venue-update.py", venueupdateData, function (data) {
                    // $('#res').html(data);
                    // console.log(data);
                    data = data.trim();

                    if (parseInt(data.trim()) === 1) {
                        Swal.fire({
                            title: "Update Failed",
                            icon: "error",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    } else {
                        Swal.fire({
                            title: "Venue Updated!",
                            text: "The record was successfully Updated.",
                            icon: "success"
                        });
                    }
                });
            } else if (activeSection === "venuelist") {
                sendAjaxRequest("venuelist.py", venueListData, function (data) {
                    // console.log(data);
                    $('#res').html(data);
                    // alert("✅ Venuelist data submitted successfully!");
                    if (data == 1)
                        Swal.fire({
                            title: "submitted",
                            icon: "success",
                            draggable: true
                        });
                    $('.update').click(function (e) {
                        // console.log('kjhg');

                        e.preventDefault();
                        // Get the attribute values
                        const VId = $(this).attr('data-VId');
                        const venuename = $(this).attr('data-venuename');
                        const address = $(this).attr('data-address');
                        const state = $(this).attr('data-state');
                        const dist = $(this).attr('data-dist');
                        const pincode = $(this).attr('data-pincode');
                        const capacity = $(this).attr('data-capacity');
                        const contact = $(this).attr('data-contact');
                        const alt_cont = $(this).attr('data-alt_cont');
                        const gallery = $(this).attr('data-gallery');

                        // Save them in localStorage
                        localStorage.setItem('VId', VId);
                        localStorage.setItem('venuename', venuename);
                        localStorage.setItem('address', address);
                        localStorage.setItem('state', state);
                        localStorage.setItem('dist', dist);
                        localStorage.setItem('pincode', pincode);
                        localStorage.setItem('capacity', capacity);
                        localStorage.setItem('contact', contact);
                        localStorage.setItem('alt_cont', alt_cont);
                        localStorage.setItem('gallery', gallery);

                        window.location.href = "venue-edit.html"
                    });
                    $('.delete').click(function (e) {
                        e.preventDefault();
                        $(this).closest('tr').remove();
                        d = $(this).closest('tr')
                        $.ajax({
                            method: "POST",
                            url: "venue-update.py",
                            data: {
                                't': 'delete',
                                't1': d.find("td:eq(0)").text()

                            },
                            success: function (data) {
                                console.log(data)
                                // if(data=="Record successfully deleted")
                            }
                        });

                    });
                });
            } else {
                console.log("⚠️ No active section detected — no data sent");
            }
        });
    });


    /*--------------------------------------
     * 8. FadeToggle
     --------------------------------------*/

    $("#search-show").click(function () {
        $("#search-hide").slideToggle();
    });
});

