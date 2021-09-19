window.onload = function () {
    "use strict";
    printResponse();
  
 
   


}

function printResponse() {
    document.getElementById("response").innerHTML = "Thank you for your order. We received the following details from you.";



    //document.getElementById("info").innerHTML = location.href;

    let str = location.href;

    let myArr = str.split("?");
    myArr = str.split("&");

    let myArrNew = myArr[0].split("?");

    document.getElementById("first1").innerHTML = myArrNew[1];
    document.getElementById("last1").innerHTML = myArr[1];
    document.getElementById("order1").innerHTML = myArr[2];
    document.getElementById("shipping1").innerHTML = myArr[3];
    document.getElementById("email1").innerHTML = myArr[4];
    document.getElementById("phone1").innerHTML = myArr[5];
    document.getElementById("preferred1").innerHTML = myArr[6];
    document.getElementById("newsletter1").innerHTML = myArr[7];
}


