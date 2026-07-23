console.log("JavaScript loaded");
//Variable

let cart = [];
let cartTotal  = 0;
let balance = 0;

//Functions


//Adding items to cart
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

displaycart();
}

//showing items in cart
function displaycart() {

    let OUTPUT = document.getElementById("cartoutput")

    OUTPUT.innerHTML = "";

    for (i = 0; i < cart.length;  i += 3) {

        OUTPUT.innerHTML +=
        "<p>" +
        cart[i] +
        " x " + cart [i + 1] +
        " : $" + cart [i + 2];
        "</p>"
    }
}

//checking out
function submitorder() {

    let username = document.getElementById("name").value;
    let money = Number(document.getElementById("money").value);

    for (let i = 0; i < cartlength; i += 3) {
        cartTotal +=  + cart [i + 2];
    }

    if (money >= cartTotal) {
        
        document.getElementById("output")
    }
}