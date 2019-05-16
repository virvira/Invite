//import $ from 'jquery';
//import avg from './some.js';

// yandex maps
ymaps.ready(init);
 
function init(){     
 
    var myMap;
 
    myMap = new ymaps.Map("map", {
        center: [45.00561520535352,-0.4803475000000338],
        zoom: 13
    });
 
	myMap.behaviors.disable('scrollZoom');
 
    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });
	
	myMap.panes.get('ground').getElement().style.filter = 'invert(90%)';
}

// sticky header
window.onscroll = function() {stickyHeader()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > 125) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
 
// scroll down to weare
document.getElementById("scroll_btn").onclick = function() {scrollDown()};
var neededElem = document.getElementById("weare");

function scrollDown() {
	neededElem.scrollIntoView({block: "center", behavior: "smooth"});
}

// form validation
document.getElementById("MesForm").onsubmit = function(){validateForm()};

function validateForm() {
	var name = document.forms["MesForm"]["Name"].value;               
    var email = document.forms["MesForm"]["Email"].value;    
    var phone = document.forms["MesForm"]["Phone"].value;  
	var mes = document.forms["MesForm"]["Message"].value;  
	
	if (name == "" || email == "" || phone == "" || mes == "")         
    { 
        window.alert("Please enter your data.");
        return false; 
    } 
	return true;
}

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './sass/style.sass';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
//require('file-loader?name=[name].[ext]!../index.html');

window.validateForm = validateForm;