

var name1 = prompt("Adınızı girin");


var date = new Date;

var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

var day = date.getDay();
var dayString = "";

switch(day){
    case 0:
        dayString = "Pazar";
        break;
    case 1:
        dayString = "Pazartesi";
        break;
    case 2:
        dayString = "Salı";
        break;
    case 3:
        dayString = "Çarşamba";
        break;
    case 4:
        dayString = "Perşembe";
        break;
    case 5:
        dayString = "Cuma";
        break;
    case 6:
        dayString = "Cumartesi";
        break;
    default:
        dayString = "";

}

document.querySelector("#myName").innerHTML = name1;
document.querySelector("#myClock").innerHTML = `${hour}:${minute}:${second} ${dayString}`;
