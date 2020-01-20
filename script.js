var length = prompt("What lenth will your password be?")
var password = '';
var myGen = document.getElementById("generate");
var myCopy = document.getElementById("copy");

var wantUpper = confirm("Do you want uppercase letters?");
var wantLower = confirm("Do you want lowercase characters?");
var wantNumbers = confirm("Do you want numbers?");
var wantSymbols = confirm("Do you want symbols?");

if(wantUpper == false) {
    var uppercase = '';
} else {
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}

if(wantLower == false) {
    var lowercase = '';
} else {
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
}

if(wantNumbers == false) {
    var numbers = '';
} else {
    var numbers = '0123456789';
}

if(wantSymbols == false) {
    var symbols = '';
} else {
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
}

var all = uppercase + lowercase + numbers + symbols;


function generate() {
    for (var index = 0; index < length; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }   
    document.getElementById("password").value = password;
}


myGen.addEventListener("click", genIt);

function genIt() {
    generate();
}


myCopy.addEventListener("click", copyIt);

function copyIt() {
    document.getElementById("password").select();
    document.execCommand("Copy");
}


