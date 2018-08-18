const menu = {}

menu.size = {
    small: 8.50,
    medium: 10,
    large: 11.50,
}

menu.cheese = {
    feta: 1.5,
    goat: 1.5,
    mozzarella: 1.5,
}

menu.vegetables = {
    artichokes: 2.50,
    blackOlives: 2.50,
    broccolli: 2.50,
    mushrooms: 2.50,
    romatomatoes: 2.50,
    pineapples: 2.50,
}

menu.meat = {
    bacon: 4,
    pepperoni: 4,
    buffaloChicken: 4,
}

let order = {};

order = {
    size: "",
    cheese: [],
    vegetables: [],
    meat: [],
}

let pizzaCost = 0;

$(document).ready(function () {
/*
    1. purpose of the function is to get the total price
    2. see which items have been selected.
    3. add the total price of the selected items together.
    4. print it out.
*/
    function addPrice() {
        pizzaCost = 0;
        let sizePrice = 0;
        let cheesePrice = 0;
        let vegetablesPrice = 0;
        let meatPrice = 0;

        // if pizza size is not selected, then the size price should be 0. if pizza size is selected, size price should be the selecetd pizza's size price.
         
        // if (typeof order.size === 'undefined' || order.size.length === 0) {
        //     sizePrice = 0;
        // } else {
        //     sizePrice = menu.size[order.size];
        // }
        
        // if (order.cheese.length === 0) {
        //     cheesePrice = 0;
        // } else {
        //     // sets price of cheese
        //     for (let i = 0; i < order.cheese.length; i++) {
        //         cheesePrice = cheesePrice + menu.cheese[order.cheese[i]];
        //     }

        // }



        // sets price of vegetables
        for (let i = 0; i < order.vegetables.length; i++) {
            vegetablesPrice = vegetablesPrice + menu.vegetables[order.vegetables[i]]
        }

        //sets price of meat
        for (let i = 0; i < order.meat.length; i++) {
            meatPrice = meatPrice + menu.meat[order.meat[i]];
        }

        // console.log(`size price - ${sizePrice}. cheese price ${cheesePrice}. veggie price ${vegetablesPrice}`)

        //adds total
        pizzaCost = sizePrice + cheesePrice + vegetablesPrice
        //  + meatPrice;
  
        console.log(`Total price is - $ ${pizzaCost}`);
    }




    $('.pizza-size-clickable').change(function(event) {
        event.preventDefault();
        order.size = $('input[name=pizza-size]:checked').val();
        addPrice();
    });

    order.cheese = []; 
    $(".pizza-cheese input[type='checkbox']").click(function () {
        const cheeseValue = $(this).val();
        if (order.cheese.includes(cheeseValue)) {
            order.cheese = order.cheese.filter(cheese => cheese != cheeseValue);       
        } else {
            order.cheese.push(cheeseValue);
        }
        addPrice();
        // console.log(order.cheese);
    });

    
    order.vegetables = [];
    $(".pizza-vegetables input[type='checkbox']").click(function () {
        const vegetablesValue = $(this).val();
        if (order.vegetables.includes(vegetablesValue)) {
            order.vegetables = order.vegetables.filter(vegetable => vegetable != vegetablesValue);
        } else {
            order.vegetables.push(vegetablesValue);
        }
        addPrice();
        // console.log(order.vegetables);
    });

    order.meat = [];
    $(".pizza-meat input[type='checkbox']").click(function(){
        const meatValue = $(this).val();
        if(order.meat.includes(meatValue)) {
            order.meat = order.meat.filter(meat => meat != meatValue);
        } else {
            order.meat.push(meatValue);
        }
        addPrice();
        // console.log(order.meat);
    });


});


