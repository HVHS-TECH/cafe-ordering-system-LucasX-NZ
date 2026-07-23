console.log("JavaScript loaded");
//Variable

let cart = [];
let cartTotal  = 0;
let username = 0;
let money = 0;

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
        " : $" + cart [i + 2] +
        "</p>";
    }
}

//checking out
function submitorder() {

    username = document.getElementById("name").value;
    money = Number(document.getElementById("money").value);

    for (let i = 0; i < cart.length; i += 3) {
        cartTotal +=  + cart [i + 2];
    }

    if (money >= cartTotal) {
        
        document.getElementById("output").innerHTML =
        "Thank you for your order " + username +
        "<br><br>";
       
        for (let i = 0; i < cart.length; i += 3) {

            document.getElementById("output").innerHTML +=
            cart[i] +
        " x " + cart [i + 1] +
        " : $" + cart [i + 2] +
        "<br>";
        }
        
        document.getElementById("output").innerHTML +=
        "<br> total cost is: $" + cartTotal + 
        "<br> you have: $" + money +
        "<br> which means you get $" + (money - cartTotal) + " back" +
        "<br> have a good rest of your day!" +
        "<br><br> <button onclick='clearorder()'>clear order</button>"

    } else {
         document.getElementById("output").innerHTML = 
         "Sorry " + username +
         ", at this moment, you can not afford this." +
          "<br> you need $" + (cartTotal - money) + " more."
        "<br><br> <button onclick='clearorder()'>clear order</button>";
    }
}

//resetting/clearing order
function clearorder() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("cartoutput").innerHTML = "";
    cart = []
    cartTotal  = 0;
    username = "";
    money = 0;
}