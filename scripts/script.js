const menu = {}

menu.size = {
    small: 8.50,
    medium: 10,
    large: 11.50,
}

menu.cheese = {
    feta: 1,
    parmesan: 1.5,
    mozzarella: 1,
}

menu.vegetables = {
    artichokes: 2.50,
    olives: 2,
    broccoli: 2.50,
    mushrooms: 1.50,
    tomatoes: 2,
    pineapple: 2.50,
}

menu.meat = {
    bacon: 4,
    pepperoni: 4,
    chicken: 4,
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

    // $('.toppings').hide();
    // $('.checkout').hide();

    function addPrice() {
        pizzaCost = 0;
        let sizePrice = 0;
        let cheesePrice = 0;
        let vegetablesPrice = 0;
        let meatPrice = 0;

       

        // sets price of pizza
        if (typeof order.size === 'undefined' || order.size.length === 0) {
            sizePrice = 0;

        } else {
            sizePrice = menu.size[order.size];
            $('.toppings').fadeIn();
            $('.checkout').fadeIn();
            
        }
        
        // sets price of cheese
        if (order.cheese.length === 0) {
            cheesePrice = 0;
        } else {
            for (let i = 0; i < order.cheese.length; i++) {
                cheesePrice = cheesePrice + menu.cheese[order.cheese[i]];
            }
        }

        // sets price of vegetables
        if (order.vegetables.length === 0) {
            vegetablesPrice = 0;
        } else {
            for (let i = 0; i < order.vegetables.length; i++) {
                vegetablesPrice = vegetablesPrice + menu.vegetables[order.vegetables[i]];
            }
        }

        //sets price of meat
        if (order.meat.length === 0) {
            meatPrice = 0;
        } else {
            for (let i = 0; i < order.meat.length; i++) {
                meatPrice = meatPrice + menu.meat[order.meat[i]];
            }
        }

        console.log(`size price - ${sizePrice}. cheese price ${cheesePrice}. veggie price ${vegetablesPrice}. meat price ${meatPrice}`)

        //adds total
        pizzaCost = sizePrice + cheesePrice + vegetablesPrice + meatPrice;
  
        console.log(`Total price is - $ ${pizzaCost}`);
    }

    function addItems() {
        let priceList = "";

        priceList = `<li>${order.size}</li>`;        
        
        // prints selected cheese
        for (i = 0; i < order.cheese.length; i++) {
            priceList = priceList + `<li>${order.cheese[i]}</li>`;
        }

        // prints selected vegetables
        for (i = 0; i < order.vegetables.length; i++) {
            priceList = priceList + `<li>${order.vegetables[i]}</li>`;
        }

        // prints selected meat
        for (i = 0; i < order.meat.length; i++) {
            priceList = priceList + `<li>${order.meat[i]}</li>`;
        }

        $(`ul.chosen-items`).empty().append(priceList);
        $(`.final-price`).empty().append(`Total price is - $ ${pizzaCost}`)
    }


    $('.pizza-size-clickable').change(function(event) {
        event.preventDefault();
        order.size = $('input[name=pizza-size]:checked').val();
        addPrice();
        addItems();
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
        addItems();
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
        addItems();
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
        addItems();
    });

});