/*

empty cart variable array that holds all the selected items.
    - price adds all the indexes inside the array
    - cart dynamically shows the number of items in basket (array.length)

1. section - select pizza
    on click, select one pizza. if pizza:selected is not equal to one, show error sign "please select a pizza to continue" on checkout

2. section - select cheese
    on click, select any number of cheeses. 

3. section - select veggies
    on click, select any number of veggies.

4. section - select meat
    on click, select any number of meat. 

5. section - submit


*/





const menu = {}

menu.size = {
    small: 8.50,
    medium: 10,
    large: 11.50,
}

// menu.cheeseTopping = {
//     feta: 2,
//     goat: 2,
//     mozzarella: 2,
// }

// pizza.veggies = {

// }

let order = {};

order = {
    pizzaSize: "",
    selectedCheese: [],
    vegetableToppings: [],
    meatTopping: [],
}

const pizza_cost = 0;


$(document).ready(function () {

        $('.pizza-size-clickable').change(function(event) {
            event.preventDefault();

            order.pizzaSize = $('input[name=pizza-size]:checked').val();
            
            // order.pizzaPrice = menu.size[pizzaSize];
            // order.

        })


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

        })


        // $('.pizza-topping-cheese-inner').on('click', function (event){
    

        //     order.cheeseTopping = $('input[name=cheese]:checked').val();
        //     // const cheesePrice = pizza.cheeseTopping[cheeseValue]

        //     // pizza.contents.cheeseValue = cheeseValue;
        //     // pizza.contents.cheesePrice = cheesePrice;

        //     // console.log(pizza.contents);


        // })

});




// when pizzaSize is selected, inside object, pizza.size[pizzaSize] gets pushed to array called piza