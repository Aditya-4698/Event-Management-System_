function check(a) {
    v = document.getElementById(a).value;
    if (v.length == 0) {
        document.getElementById(a).value = "Field is mandatory*";
        document.getElementById(a).style.border = "2px solid red";
        document.getElementById(a).style.color = "red";
    }
    // console.log(v);
}
function fcheck(a) {
    v = document.getElementById(a).value;
    if (v == "Field is mandatory*") {
        document.getElementById(a).value = "";
        document.getElementById(a).style.border = "2px solid black";
        document.getElementById(a).style.color = "black";
    }
}
function checkchardig(a, b) {
    ch = a.which;
    document.getElementById(b).innerHTML = "";
    if (!((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || (ch >= 48 && ch <= 57) || ch == 32)) {
        document.getElementById(b).innerHTML = "*Except special character";
        document.getElementById(b).style.color = "red";
        a.preventDefault();
    }
}

function checkchar(a, b) {
    ch = a.which;
    document.getElementById(b).innerHTML = "";
    if (!((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || (ch >= 48 && ch <= 57) || ch == 32)) {
        document.getElementById(b).innerHTML = "*Only alphabets and space allowed!";
        document.getElementById(b).style.color = "red";
        a.preventDefault();
    }
}

function contact(a, b) {
    ch = a.which;
    input = a.target.value;
    document.getElementById(b).innerHTML = "";
    if (!(ch >= 48 && ch <= 57)) {
        document.getElementById(b).innerHTML = "*Only Digits allowd!";
        document.getElementById(b).style.color = "red";
        a.preventDefault();
    }
    if (input.length >= 10 && (ch >= 48 && ch <= 57)) {
        document.getElementById(b).innerHTML = "*Maximum 10 digits allowed!";
        document.getElementById(b).style.color = "red";
        a.preventDefault();
    }
}

function checkcharsp(a, b) {
    ch = a.which || a.keycode;
    document.getElementById(b).innerHTML = "";

    if (!((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || (ch >= 48 && ch <= 57) || (ch >= 33 && ch <= 47) || (ch >= 58 && ch <= 64) || (ch >= 91 && ch <= 96) || (ch >= 123 && ch <= 126) || ch == 32)) {
        document.getElementById(b).innerHTML = "*Invalid char";
        document.getElementById(b).style.color = "red";
        a.preventDefault();
    }
}