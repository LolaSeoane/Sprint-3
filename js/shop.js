// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    /*for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cartList.push(products[i])
        }
    }*/

    const product = products.find(product => id === product.id)
    cartList.push(product)
    document.getElementById('count_product').innerHTML = cartList.length
    console.log(cartList)
    calculateTotal()
    generateCart()
}


// Exercise 2
function cleanCart() {
    cartList = []
    total = 0
    document.getElementById('count_product').innerHTML = cartList.length

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0
    /*for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price
    }*/
    for (let i = 0; i < cart.length; i++) {

        if (cart[i].subtotalWithDiscount) {
            total += cart[i].subtotalWithDiscount
        }
        else if (cart[i].subtotal) {
            total += cart[i].subtotal
        }


    }
    console.log(total)

}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    cart = [] // Important to clean cart
    for (let i = 0; i < cartList.length; i++) {
        const product = cartList[i]
        const productExist = cart.includes(product)

        if (!productExist) {
            product.quantity = 1
            product.subtotal = product.price
            cart.push(product)
        }

        if (productExist) {
            product.quantity += 1
            product.subtotal += product.price

        }
    }

    console.log(cart)
    applyPromotionsCart()
    calculateTotal()

}


// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++) {
        const existDiscount = cart[i].offer
        const needApplyDiscount = existDiscount && cart[i].quantity >= cart[i].offer.number
        if (needApplyDiscount) {
            const percent = cart[i].offer.percent / 100
            const discount = cart[i].subtotal * percent
            cart[i].subtotalWithDiscount = cart[i].subtotal - discount
        }
        else if (!needApplyDiscount) {
            delete (cart[i].subtotalWithDiscount)
        }

    }
}



// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    let cartCounter = 0;
    let tabList = [];
    cart.forEach((prod) => {
        cartCounter += prod.quantity;
        tabList.push(
            `
            <tr>
            <th scope="row">${prod.name}</th>
                <td>$${prod.price}</td>
                <td>${prod.quantity}</td>
                <td>$${prod.subtotalWithDiscount ? prod.subtotalWithDiscount : prod.subtotal
            }</td>   
             </tr> `
        );
    });
    document.getElementById("cart_list").innerHTML = tabList;
    document.getElementById("count_product").innerHTML = cartCounter;
    document.getElementById("total_price").innerHTML = total.toFixed(2);

}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}