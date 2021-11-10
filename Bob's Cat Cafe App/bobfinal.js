"use strict";
const getSelectedProduct = src => {
    let selected = [];

    if (src == "images/espresso.jpg") {
        selected = ["espresso", 1.95, " espresso"];
    }else if (src=="images/latte.jpg"){
        selected = ["latte" , 2.95, " latte"];    
    }else if (src=="images/biscotti.jpg"){
        selected = ["biscotti" , 1.95, " biscotti"];
    }else if (src=="images/cappuccino.jpg"){
        selected = ["cappuccino" , 3.45, " cappuccino"]; 
    }else if (src=="images/scone.jpg"){
        selected = ["scone" , 2.95, " scone"];
    }else if (src=="images/coffee.jpg"){
        selected = ["coffee" , 1.75, " coffee"];
    }
    return selected;
};
$(document).ready ( () => {
    let total = 0;

    $("ul img").each( (index, img) => {
        const orgImg = $(img).attr("src"); 
        const hovImg = $(img).attr("id");

        const rolloverImage = new Image();
    rolloverImage.src = hovImg;
       
    $(img).hover(
        () => $(img).attr("src", hovImg),     //error src should be id
        () => $(img).attr("src", orgImg)
    );

    $(img).click( evt => {

        const selected = getSelectedProduct(orgImg);

        let order = $("#order").html();
        if (order == undefined) {
            order = "";
        }
        total += selected[1];
    order += `<option value="$(selected[0]}">$${selected[1]} - ${selected[2]}</option>`; 
        $("#order").html(order);
        $("#total").text (`Total: $${total.toFixed(2)}`);
         
        evt.preventDefault();

    });
});
$("#selectedOrder").click ( () => {
    const order = $("#order").text();
    if (order == "") {
        alert ("You can't check out if you don't make a selection.");
    } else {
        $("#order_form").submit();
    }
}); //end click

$("#clear_order").click( () => {
    total = 0;
    $("#order").text("");
    $("#total").text("");
}); //end click
}); //end ready

/* 





}






<li><a href="#"><img id="images/espresso_info.jpg" src="images/espresso.jpg" alt="espresso"/></a></li>
            		<li><a href="#"><img id="images/latte_info.jpg" src="images/latte.jpg" alt="latte"/></a></li>
            		<li><a href="#"><img id="images/cappuccino_info.jpg" src="images/cappuccino.jpg" alt="cappuccino"/></a></li>
            		<li><a href="#"><img id="images/coffee_info.jpg" src="images/coffee.jpg" alt="coffee"/></a></li>
            		<li><a href="#"><img id="images/biscotti_info.jpg" src="images/biscotti.jpg" alt="biscotti"/></a></li>
            		<li><a href="#"><img id="images/scone_info.jpg" src="images/scone.jpg" alt="scone"/></a></li>


var $ = function(id) { return document.getElementById(id); };
window.onload= function() {
var listNode= $("menuItems"); // the ul element
//var captionNode= $("caption"); // the h2 element
var imageNode= $("main_image"); // the main imgelement
var imageLinks= listNode.getElementsByTagName("a");
// process image links
var i, image, link;
for ( i= 0; i< imageLinks.length; i++ ) {
// preload image
image = new Image();
image.src= imageLinks[i].getAttribute("href");
//THE SWAP.JS FILE (PART 2)
// attach event handler
imageLinks[i].onclick = function(evt) {
link = this;// the link that was clicked
// set new image and caption
imageNode.src= link.getAttribute("href");
captionNode.firstChild.nodeValue=
link.getAttribute("title");
// cancel the default action of the event
if (!evt) { evt= window.event; }
if (evt.preventDefault) { evt.preventDefault(); }
else { evt.returnValue = false; }
};
}
// set focus on first image link
imageLinks[0].focus();
};


//DOM CODE CANCELS DEFAULT ACTION (chap7 slide 4)
var event_handler= function(evt) {
e.preventDefault();
}; */