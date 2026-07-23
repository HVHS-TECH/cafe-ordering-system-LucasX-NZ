console.log("JavaScript loaded");
//Variable

let cart = [];
var cartTotal  = 0;
let name = 0;
let balance = 0;

//Functions

function addtocart(item, price) {
    
    for (i = 0; i < cart.length;  i += 3) {

        if  (cart[i] == item) {

            cart [i + 1] = cart [i + 1] + 1;
            cart [i + 2] = cart [i + 1] * price;

            displaycart();
            return;
        }
    }

    cart.push(item);
    cart.push(1);
    cart.push(price);
}

function displaycart() {

    let OUTPUT = document.getElementById("cartoutput")

    OUTPUT.innerHTML = "";

    for (i = 0; i < cart.length;  i += 3) {

        OUTPUT.innerHTML +=
        cart[i] +
        " x " + cart [i + 1] +
        " : $" + cart [i + 2];
        "<br><br>";
    }
}
