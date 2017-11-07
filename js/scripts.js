$(document).ready(function(){  
    $('form#button').submit(function(evt){

            alert("you have successifully subscribed");    

     });

});

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
} 