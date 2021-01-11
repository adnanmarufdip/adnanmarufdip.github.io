"use strict";
// variables
var ID; var indx1; var indx2; var condtn = 0;
var prg1 = 0; var prg2 = 0; var prg3 = 0; var prg4 = 0; var prg5 = 0; var prg6 = 0;
var cPvalue1; var cPvalue2; var cPvalue3; var cPvalue4; var cPvalue5; var cPvalue6;
var animate1; var animate2; var animate3; var animate4; var animate5; var animate6;


// making slide down navbar on body scroll
function navBar_toggle() { 
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {   
        document.getElementById("headSec").classList.add("fixedNav");          
	}
	else {       
        document.getElementById("headSec").classList.remove("fixedNav");
    }
}

// // creating toggle functionality for the burger menu button//
function toggleNav() { 
    if(document.getElementById("check").checked == true) {
        document.getElementById("navUl").style.left = "0"; 
        disableScrl();
    }
    else{
        document.getElementById("navUl").style.left = "-100%";
        disableScrl();
    }
}

// temporarily disabling body scroll while the nav link's are displaying
function disableScrl() { 
    var currentValue = document.getElementById("navUl").style.left;
    if (currentValue == "0px") {
        document.body.style.overflow = "hidden";
    }
    else if (currentValue == "-100%"){
        document.body.style.overflow = "auto";
    }
}

// // nav link click hiding the nav link menu
function hideULnav() { 
    var Swidth = screen.width; 
    if (Swidth <= 1036) {
        document.getElementById("navUl").style.left = "-100%";
        document.getElementById("check").checked = false;
        disableScrl();
    }
}


// adding click function to element
 function clickLink(elementId){
     var linkId = elementId.id;
    switch(linkId)
    {
        case "link1_0": {
            document.getElementById("aBtn0").click();
            break;
        }
        case "link1_1": {
            document.getElementById("aBtn1").click();
            break;
        }
        case "link1_2": {
            document.getElementById("aBtn2").click();
            break;
        }
        case "link1_3": {
            document.getElementById("aBtn3").click();
            break;
        }
        case "link1_4": {
            document.getElementById("aBtn4").click();
            break;
        }
    }
 }

// About in Viewport
 function ViewportAbout() {
    var elemnt = document.getElementById("About");
    var elePos = elemnt.getBoundingClientRect();
    var loc = elePos.top;
    if(loc < 0.296875) {
        if (condtn == 0) {
            AnimateProgressBar();
        }
    }
 }
 // Achievements in Viewport
//  function ViewportAchievements() {
//     var elemnt = document.getElementById("Achievements");
//     var elePos = elemnt.getBoundingClientRect();
//     var spaceTop = window.innerHeight - elePos.top;
//     var spaceBelow = window.innerHeight - elePos.bottom;
//     console.log("Top: " +spaceTop+ " Bottom: " +spaceBelow);
//     var loc = elePos.top;
//     if(loc < 0.59375) {
//         ulLink1[2].Class = 1;
//         indx1 = 2;
//         AddClass();
//         RemoveClass();
//     }
//  }
 // Specialization in Viewport
//  function ViewportSpecialization() {
//     var elemnt = document.getElementById("Specialization");
//     var elePos = elemnt.getBoundingClientRect();
//     var spaceTop = window.innerHeight - elePos.top;
//     var spaceBelow = window.innerHeight - elePos.bottom;
//     console.log("Top: " +spaceTop+ " Bottom: " +spaceBelow);
//     var loc = elePos.top;
//     if(loc < 0.890625) {
//         ulLink1[3].Class = 1;
//         indx1 = 3;
//         AddClass();
//         RemoveClass();
//     }
//  }
 // Projects in Viewport
//  function ViewportProjects() {
//     var elemnt = document.getElementById("Projects");
//     var elePos = elemnt.getBoundingClientRect();
//     var spaceTop = window.innerHeight - elePos.top;
//     var spaceBelow = window.innerHeight - elePos.bottom;
//     console.log("Top: " +spaceTop+ " Bottom: " +spaceBelow);
//     var loc = elePos.top;
//     if(loc < 0.1875) {
//         ulLink1[4].Class = 1;
//         indx1 = 4;
//         AddClass();
//         RemoveClass();
//     }
//  }
 // Get_Update in Viewport
//  function ViewportGetUpdate() {
//     var elemnt = document.getElementById("Get_Update");
//     var elePos = elemnt.getBoundingClientRect();
//     var spaceTop = window.innerHeight - elePos.top;
//     var spaceBelow = window.innerHeight - elePos.bottom;
//     console.log("Top: " +spaceTop+ " Bottom: " +spaceBelow);
//     var loc = elePos.top;
//     if(loc < 1) {
//         ulLink1[8].Class = 1;
//         indx1 = 8;
//         AddClass();
//         RemoveClass();
//     }
//  }
// Progressbar Animation function
function AnimateProgressBar() {
    condtn = 1;
    cPvalue1 = document.getElementById("bar1").value;
    cPvalue2 = document.getElementById("bar2").value;
    cPvalue3 = document.getElementById("bar3").value;
    cPvalue4 = document.getElementById("bar4").value;
    cPvalue5 = document.getElementById("bar5").value;
    cPvalue6 = document.getElementById("bar6").value;
    animate1 = setInterval(Bar1Animation, 20);
    animate2 = setInterval(Bar2Animation, 20);
    animate3 = setInterval(Bar3Animation, 20);
    animate4 = setInterval(Bar4Animation, 20);
    animate6 = setInterval(Bar5Animation, 20);
    animate6 = setInterval(Bar6Animation, 20);
}
function Bar1Animation() {
    if(prg1 <= cPvalue1){
        document.getElementById("bar1").value = prg1;
        document.getElementById("barVal1").innerHTML = prg1 + "%";
        prg1++;
    }
    else if (prg1 == cPvalue1){
        clearInterval(animate1);
    }
}
function Bar2Animation() {
    if(prg2 <= cPvalue2){
        document.getElementById("bar2").value = prg2;
        document.getElementById("barVal2").innerHTML = prg2 + "%";
        prg2++;
    }
    else if (prg2 == cPvalue2){
        clearInterval(animate2);
    }
}
function Bar3Animation() {
    if(prg3 <= cPvalue3){
        document.getElementById("bar3").value = prg3;
        document.getElementById("barVal3").innerHTML = prg3 + "%";
        prg3++;
    }
    else if (prg3 == cPvalue3){
        clearInterval(animate3);
    }
}
function Bar4Animation() {
    if(prg4 <= cPvalue4){
        document.getElementById("bar4").value = prg4;
        document.getElementById("barVal4").innerHTML = prg4 + "%";
        prg4++;
    }
    else if (prg4 == cPvalue4){
        clearInterval(animate4);
    }
}
function Bar5Animation() {
    if(prg5 <= cPvalue5){
        document.getElementById("bar5").value = prg5;
        document.getElementById("barVal5").innerHTML = prg5 + "%";
        prg5++;
    }
    else if (prg5 == cPvalue5){
        clearInterval(animate5);
    }
}
function Bar6Animation() {
    if(prg6 <= cPvalue6){
        document.getElementById("bar6").value = prg6;
        document.getElementById("barVal6").innerHTML = prg6 + "%";
        prg6++;
    }
    else if (prg6 == cPvalue6){
        clearInterval(animate6);
    }
}

function changecolor() {
    document.querySelector(".contact-info").style.background = "rgba(35,32,32, 1)";
}

function revartcolor() {
    document.querySelector(".contact-info").style.background = "rgba(35,32,32, 0.8)";
}
