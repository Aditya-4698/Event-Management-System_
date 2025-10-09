$(document).ready(function () {

    // Field Selectors
    const mandatoryFields = "#venuename,#address,#dist,#state,#pincode,#contact,#alt_cont,#categname,#sername,#vistname,#custname,#adhar,#eventname,#cost,#capacity,#amt,#balance,#description,#gallery,#date";
    const alphabetOnlyFields = "#venuename,#dist,#state,#categname,#sername,#vistname,#custname,#eventname,#exampleselect";
    const only10digitsfield = "#contact,#alt_cont";
    const pin6digits = "#pincode";
    const adhar12digits = "#adhar";
    const capacity = "#capacity";
    const address = "#address,#description";
    const cost = "#cost,#amt,#Damt,#balance";

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

        const controlKeys = [8, 9, 37, 38, 39, 40, 46,188];
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

    $(document).ready(function () {
    // ✅ AJAX Function
    function sendAjaxRequest(url, data, successCallback, errorCallback, method = "POST") {
        $.ajax({
            url: url,
            type: method,
            data: data,
            success: function (data) {
                console.log("✅ Success from", url, ":", data);
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
            capacity: capacity,
            Stime: stime,
            Etime: etime,
            description: description
        };

        const eventlistData = {
            EId: eventid,
            venuename: venue,
            sername: sername,
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

        const categorylistData = {
            catid: catid,
            categname: catname,
        };

        const customerdata = {
            CId: custid,
            custname: custname,
            contact: cont,
            alt_cont: altcont,
            district: dist,
            state: state,
            pincode: pin,
            address: address,
            adhar: adhar,
            gallery: gallery
        };

        const customerlistdata = {
            CId: custid,
            custname: custname,
            district: dist,
            address: address,
            state: state,
            pincode: pin,
            contact: cont,
        };

        const eventserviceData = {
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
            SId: serid,
            EId: eventid,
            CId: custid,
            Rating: Rating, 
            date: date,
            address: address
        };

        const feedbacklistData = {
            eventname: eventname,
            custname: custname
        };

        const paymentData = {
            PId: PId,
            EId: eventid,
            custname: custname,
            amt: amt,
            Damt: Damt,
            balance: bal,
            mode: mode,
            Status: Status,
            Tdate: Transaction
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
            categname: catname,
            description: description
        }; 

        const servicelistData = {
            SId: serid,
            mode: mode,
            sername: sername
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
        } else if ($("#visitorSection").is(":visible")) {
            activeSection = "visitor";
        } else if ($("#visitorlistSection").is(":visible")) {
            activeSection = "visitorlist";
        } else if ($("#CategorySection").is(":visible")) {
            activeSection = "Category";
        } else if ($("#customerSection").is(":visible")) {
            activeSection = "customer";
        } else if ($("#customerlistSection").is(":visible")) {
            activeSection = "customerlist";
        } else if ($("#eventservice").is(":visible")) {
            activeSection = "eventservice";
        } else if ($("#eventservicelist").is(":visible")) {
            activeSection = "eventservicelist";
        } else if ($("#feedbackSection").is(":visible")) {
            activeSection = "feedback";
        } else if ($("#feedbacklistSection").is(":visible")) {
            activeSection = "feedbacklist";
        } else if ($("#paymentSection").is(":visible")) {
            activeSection = "payment";
        } else if ($("#paymentlistSection").is(":visible")) {
            activeSection = "paymentlist";
        } else if ($("#serviceSection").is(":visible")) {     
            activeSection = "service";
            } else if ($("#servicelistSection").is(":visible")) {     
            activeSection = "servicelist";
        } else if ($("#venueSection").is(":visible")) {
            activeSection = "venue";
        } else if ($("#venuelistSection").is(":visible")) {
            activeSection = "venuelist";
        } else if ($("#CategorylistSection").is(":visible")) {
            activeSection = "Categorylist";
        }



        // ✅ Send data based on active section
        if (activeSection === "event") {
            sendAjaxRequest("event.py", eventData, function (data) {
                alert("✅ Event data submitted successfully!");
            });
        } else if (activeSection === "eventlist") {
            sendAjaxRequest("eventlist.py", eventlistData, function (data) {
                alert("✅ Eventlist data submitted successfully!");
            });
        } else if (activeSection === "visitor") {
            sendAjaxRequest("visitor.py", visitorData, function (data) {
                alert("✅ Visitor data submitted successfully!");
            });
        } else if (activeSection === "visitorlist") {
            sendAjaxRequest("visitorlist.py", visitorlistData, function (data) {
                alert("✅ Visitorlist data submitted successfully!");
            });
        } else if (activeSection === "Category") {
            sendAjaxRequest("category.py", categoryData, function (data) {
                alert("✅ category data submitted successfully!");
            });
        } else if (activeSection === "Categorylist") {
            sendAjaxRequest("categorylist.py", categorylistData, function (data) {
                alert("✅ Categorylist data submitted successfully!");
            });
        } else if (activeSection === "customer") {
            sendAjaxRequest("customer.py", customerdata, function (data) {
                alert("✅ Customer data submitted successfully!");
            });
        } else if (activeSection === "customerlist") {
            sendAjaxRequest("customerlist.py", customerlistdata, function (data) {
                alert("✅ Customerlist data submitted successfully!");
            });
        } else if (activeSection === "eventservice") {
            sendAjaxRequest("event_service.py", eventserviceData, function (data) {
                alert("✅ Event_Service data submitted successfully!");
            });
        } else if (activeSection === "eventservicelist") {
            sendAjaxRequest("event_servicelist.py", eventservicelistData, function (data) {
                alert("✅ Event_ServiceList data submitted successfully!");
            });
        } else if (activeSection === "feedback") {
            sendAjaxRequest("feedback.py", feedbackData, function (data) {
                alert("✅ Feedback data submitted successfully!");
            });
        } else if (activeSection === "feedbacklist") {
            sendAjaxRequest("feedbacklist.py", feedbacklistData, function (data) {
                alert("✅ Feedbacklist data submitted successfully!");
            });
        } else if (activeSection === "payment") {
            sendAjaxRequest("payment.py", paymentData, function (data) {
                alert("✅ Payment data submitted successfully!");
            });
        } else if (activeSection === "paymentlist") {
            sendAjaxRequest("paymentlist.py", paymentlistData, function (data) {
                alert("✅ Paymentlist data submitted successfully!");
            });
        } else if (activeSection === "service") {     
            sendAjaxRequest("service.py", serviceData, function (data) {
                alert("✅ Service data submitted successfully!");
            });
        } else if (activeSection === "servicelist") {     
            sendAjaxRequest("servicelist.py", servicelistData, function (data) {
                alert("✅ Servicelist data submitted successfully!");
            });
        } else if (activeSection === "venue") {         
            sendAjaxRequest("venue.py", venueData, function (data) {
                alert("✅ Venue data submitted successfully!");
            });
        } else if (activeSection === "venuelist") {
            sendAjaxRequest("venuelist.py", venueListData, function (data) {
                alert("✅ Venuelist data submitted successfully!");
            });
        }
         else { 
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

