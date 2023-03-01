
function evento() {
    document.getElementById("demo").innerHTML = "011-45865879";
}

function evento2() {
    document.getElementById("demo").innerHTML = "";
}

function evento3() {
    document.getElementById("demo1").innerHTML = "San Cristobal 1383-Capital Federal";
}

function evento4() {
    document.getElementById("demo2").innerHTML = "carlosbowman@ecomerce.com.ar";
}

function evento5() {
    document.getElementById("demo1").innerHTML = "";
}

function evento6() {
    document.getElementById("demo2").innerHTML = "";
}

function validateEmailAddress(email2) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email2);
}

function validate() {
    document.getElementById("resultado").value = " ";
    const emailaddress = document.getElementById('email2').value;
    if (validateEmailAddress(emailaddress)) {
        document.getElementById("resultado").innerHTML = emailaddress + " Es un correo Válido - SUSCRIPCION ENVIADA . Muchas gracias";
        document.getElementById("resultado").style.color = "green";
    } else {
        document.getElementById("resultado").innerHTML = emailaddress + " No es un correo correcto, por favor vuelva a cargar";
        document.getElementById("resultado").style.color = "red";
    }
    return false;
}

function restablecer() {
    document.getElementById("resultado").innerHTML = " ";
}   

