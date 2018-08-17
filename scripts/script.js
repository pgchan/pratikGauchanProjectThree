const menu = {}

menu.size = {
    small: 8.50,
    medium: 10,
    large: 11.50,
}

menu.cheese = {
    feta: 2,
    goat: 2,
    mozzarella: 2,
}

menu.vegetables = {
    artichokes: 1.5,
    blackOlives: 1.5,
    broccolli: 1.5,
    mushrooms: 1.5,
    romaTomato: 1.5,
    pineapples: 1.5,
}



// pizza.veggies = {

// }

let order = {};

order = {
    size: "",
    cheese: [],
    vegetables: [],
    meat: [],
}

const pizza_cost = 0;

$(document).ready(function () {

        $('.pizza-size-clickable').change(function(event) {
            event.preventDefault();
            order.size = $('input[name=pizza-size]:checked').val();
            // order.pizzaPrice = menu.size[pizzaSize];
            // order.
        });

    // make a new array called selectedCheese. When a cheese is selected, push the value to selectedCheese array.
   //  loop through the selectedCheese array.

        order.cheese = [];    
        $(".pizza-cheese input[type='checkbox']").click(function () {
            const cheeseValue = $(this).val();
            if (order.cheese.includes(cheeseValue)) {
                order.cheese = order.cheese.filter(cheese => cheese != cheeseValue);          
            } else {
                order.cheese.push(cheeseValue);
            }
            console.log(order.cheese);
        });

        // order.vegetables = [];
        // $(".pizza-vegetables input[type='checkbox']").click(function () {
        //     const vegetablesValue = $(this).val();
        //     if (order.vegetables.includes(vegetablesValue)) {
        //         order.vegetables = order.vegetables.filter((vegetable) => {
        //             return vegetable != vegetablesValue;
        //         });
        //     } else {
        //         order.vegetables.push(vegetablesValue);
        //     }
        //     console.log(order.vegetables);
        // });

        order.vegetables = [];
        $(".pizza-vegetables input[type='checkbox']").click(function(){
            const vegetablesValue = $(this).val();
            if (order.vegetables.includes(vegetablesValue)) {
                order.vegetables = order.vegetables.filter((vegetable) => { 
                    if (vegetable != vegetablesValue) {
                        return;
                    }     
                });
            } else {
                order.vegetables.push(vegetablesValue);
            }
            console.log(order.vegetables);
        });

        order.meat = [];
        $(".pizza-meat input[type='checkbox']").click(function(){
            const meatValue = $(this).val();
            if(order.meat.includes(meatValue)) {
                order.meat = order.meat.filter(meat => meat != meatValue);
            } else {
                order.meat.push(meatValue);
            }
            console.log(order.meat);
        });

        // $('.pizza-topping-cheese-inner').on('click', function (event){
    

        //     order.cheeseTopping = $('input[name=cheese]:checked').val();
        //     // const cheesePrice = pizza.cheeseTopping[cheeseValue]

        //     // pizza.contents.cheeseValue = cheeseValue;
        //     // pizza.contents.cheesePrice = cheesePrice;

        //     // console.log(pizza.contents);


        // })

});




// when pizzaSize is selected, inside object, pizza.size[pizzaSize] gets pushed to array called piza