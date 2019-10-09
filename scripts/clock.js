//Varibles for the school period functions.
let dt = new Date();
let MODUALSTART　= new Date();
let MODUALEND　= new Date();
let FIRSTSTART　= new Date();
let FIRSTEND　= new Date();
let SECONDSTART　= new Date();
let SECONDEND　= new Date();
let THIRDSTART　= new Date();
let THIRDEND　= new Date();
let FOURTHSTART　= new Date();
let FOURTHEND　= new Date();
let FIFTHSTART = new Date();
let FIFTHEND = new Date();
let SIXTHSTART = new Date();
let SIXTHEND = new Date();
let SEVENTHSTART = new Date();
let SEVENTHEND = new Date();
let BREAKSTART = new Date();
let BREAKEND = new Date();
let LUNCHSTART = new Date();
let LUNCHEND = new Date();
let CLEANINGSTART = new Date();
let CLEANINGEND = new Date();
let BUSSTART = new Date();
let BUSEND = new Date();

//Check the day of week and sets the schedule accordingly.
if (dt.getDay() != 6) {
    MODUALSTART.setHours(8,25,0);
    MODUALEND.setHours(8,54,50);
    FIRSTSTART.setHours(8,55,0);
    FIRSTEND.setHours(9,40,0);
    SECONDSTART.setHours(9,45,0);
    SECONDEND.setHours(10,30,0);
    THIRDSTART.setHours(10,45,0);
    THIRDEND.setHours(11,30,0);
    FOURTHSTART.setHours(11,35,0);
    FOURTHEND.setHours(12,20,0);
    FIFTHSTART.setHours(13,30,0);
    FIFTHEND.setHours(14,15,0);
    SIXTHSTART.setHours(14,20,0);
    SIXTHEND.setHours(15,5,0);
    SEVENTHSTART.setHours(15,10,0);
    SEVENTHEND.setHours(15,45,0);
    BREAKSTART.setHours(10,30,1);
    BREAKEND.setHours(10,40,0);
    LUNCHSTART.setHours(12,20,1);
    LUNCHEND.setHours(13,5,0);
    CLEANINGSTART.setHours(13,10,0);
    CLEANINGEND.setHours(13,25,0);
    BUSSTART.setHours(15,55,0);
    BUSEND.setHours(16,5,0);
} else {
    FIRSTSTART.setHours(8,35,0);
    FIRSTEND.setHours(9,20,0);
    SECONDSTART.setHours(9,25,0);
    SECONDEND.setHours(10,10,0);
    THIRDSTART.setHours(10,15,0);
    THIRDEND.setHours(11,0,0);
    FOURTHSTART.setHours(11,5,0);
    FOURTHEND.setHours(11,55,0);
    BUSSTART.setHours(12,0,0);
    BUSEND.setHours(12,5,0);
}

function removeHighlight() {
    let idArray = ["modual","first","second","third","fourth","fifth","sixth","seventh","break",
        "lunch","cleaning","satFirst","satSecond","satThird","satFourth"]
    idArray.forEach(function (id) {if (document.getElementById(id).classList.contains("highlight")) 
        {document.getElementById(id).classList.remove("highlight")}});
}

function addHighlight(id) {
    document.getElementById(id).classList.add("highlight");
}

function schoolClock() {
    //Updates the current school period.
    let dt = new Date();
    
    //First, checks day then checks time. Compares current time with start/end time of periods.
    if (dt.getDay() != 6 && dt.getDay() != 0) {
        if (dt >= MODUALSTART && dt <= MODUALEND) {
            document.getElementById("period").innerHTML = "Modual";
            if (periodPage) { addHighlight("modual"); }
        } else if (dt >= FIRSTSTART && dt <= FIRSTEND) {
            document.getElementById("period").innerHTML = "1st Period";
            if (periodPage) { addHighlight("first"); }
        } else if (dt >= SECONDSTART && dt <= SECONDEND) {
            document.getElementById("period").innerHTML = "2nd Period";
            if (periodPage) { addHighlight("second"); }
        } else if (dt >= THIRDSTART && dt <= THIRDEND) {
            document.getElementById("period").innerHTML = "3rd Period";
            if (periodPage) { addHighlight("third"); }
        } else if (dt >= FOURTHSTART && dt <= FOURTHEND) {
            document.getElementById("period").innerHTML = "4th Period";
            if (periodPage) { addHighlight("fourth"); }
        } else if (dt >= FIFTHSTART && dt <= FIFTHEND) {
            document.getElementById("period").innerHTML = "5th Period";
            if (periodPage) { addHighlight("fifth"); }
        } else if (dt >= SIXTHSTART && dt <= SIXTHEND) {
            document.getElementById("period").innerHTML = "6th Period";
            if (periodPage) { addHighlight("sixth"); }
        } else if (dt >= SEVENTHSTART && dt <= SEVENTHEND) {
            document.getElementById("period").innerHTML = "7th Period";
            if (periodPage) { addHighlight("seventh"); }
        } else if (dt >= BREAKSTART && dt <= BREAKEND) {
            document.getElementById("period").innerHTML = "Break Period";
            if (periodPage) { addHighlight("break"); }
        } else if (dt >= LUNCHSTART && dt <= LUNCHEND) {
            document.getElementById("period").innerHTML = "Lunch";
            if (periodPage) { addHighlight("lunch"); }
        } else if (dt >= CLEANINGSTART && dt <= CLEANINGEND) {
            document.getElementById("period").innerHTML = "Cleaning";
            if (periodPage) { addHighlight("cleaning"); }
        } else if (dt >= BUSSTART && dt <= BUSEND) {
            document.getElementById("period").innerHTML = "Bus";
        } else if ( dt >= MODUALSTART && dt <= BUSEND){
            document.getElementById("period").innerHTML = "In between periods";
            if (periodPage) { removeHighlight(); }
        } else {
            document.getElementById("period").innerHTML = "Out";
            if (periodPage) { removeHighlight(); }
        }
    } else if (dt.getDay() == 6) {
        if (dt >= FIRSTSTART && dt <= FIRSTEND) {
            document.getElementById("period").innerHTML = "1st Period";
            if (periodPage) { addHighlight("satFirst"); }
        } else if (dt >= SECONDSTART && dt <= SECONDEND) {
            document.getElementById("period").innerHTML = "2nd Period";
            if (periodPage) { addHighlight("satSecond"); }
        } else if (dt >= THIRDSTART && dt <= THIRDEND) {
            document.getElementById("period").innerHTML = "3rd Period";
            if (periodPage) { addHighlight("satThird"); }
        } else if (dt >= FOURTHSTART && dt <= FOURTHEND) {
            document.getElementById("period").innerHTML = "4th Period";
            if (periodPage) { addHighlight("satFourth"); }
        } else if (dt >= BUSSTART && dt <= BUSEND) {
            document.getElementById("period").innerHTML = "Bus";
        } else if ( dt >= FIRSTSTART && dt <= BUSEND){
            document.getElementById("period").innerHTML = "In between periods";
            if (periodPage) { removeHighlight(); }
        } else {
            document.getElementById("period").innerHTML = "Out";
            if (periodPage) { removeHighlight(); }
        }
    } else {
        document.getElementById("period").innerHTML = "Out";
        if (periodPage) { removeHighlight(); }
    }
}

function clock() {
    let dt = new Date();
    document.getElementById("clock").innerHTML = dt.toLocaleTimeString('en-US');
}

function dayDate() {
    let dt = new Date();
    
    //Updates the day of the week
    switch (dt.getDay()) {
        case 0:
            document.getElementById("day").innerHTML = "Sunday";
            break;
        case 1:
            document.getElementById("day").innerHTML = "Monday";
            break;
        case 2:
            document.getElementById("day").innerHTML = "Tuesday";
            break;
        case 3:
            document.getElementById("day").innerHTML = "Wednesday";
            break;
        case 4:
            document.getElementById("day").innerHTML = "Thursday";
            break;
        case 5:
            document.getElementById("day").innerHTML = "Friday";
            break;
        case 6:
            document.getElementById("day").innerHTML = "Saturday";
            break;
    }
    
    //Updates the date
    document.getElementById("date").innerHTML = dt.toLocaleDateString("en-US")
}