//Variable

let cart = [];
var cartTotal  = 0;
let name = 0;
let balance = 0;
let OUTPUT = document.getElementById("cartoutput")
let i = 0;

//Functions

function addtocart(item, price) {
    
    for (i < cart.length;  i += 3) {

        if  (cart[i] == item) {

            cart [i + 1] = cart [i + 1] + 1;
            cart [i + 2] = cart [i + 1] * price;

            displaycart();
            return;
        }

}

function displaycart() {

    OUTPUT.innerHTML = "";
    for (i < cart.length;  i += 3) {

        OUTPUT.innterHTML +=
        cart[i] +
        "x" + cart [i + 1] +
        " : $" + cart [i + 2];
    }
}
