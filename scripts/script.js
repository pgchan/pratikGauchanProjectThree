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






1. Global price = 0. If anything is selected, add to total price. If anything is taken out, subtract
2. Select size - Small($7.50)/ Medium($9.00) /Large ($11.00)
3. Select toppings -
    1. Veggies ($1.50) - artichokes, black olives, mushrooms, Roma tomatoes, pineapples
    2. Meat ($2.50)- bacon, pepperoni,  salami,
    3. Cheese ($0.50)- Feta, Goat cheese, Parmesan
4. Add adsSelect toppings -
    1. Veggies ($1.50) - artichokes, black olives, mushrooms, Roma tomatoes, pineapples
    2. Meat ($2.50)- bacon, pepperoni,  salami,
    3. Cheese ($0.50)- Feta, Goat cheese, Parmesan


*/


// <section class="wrapper">
//     <form action="">
//         <fieldset class="pizza-toppings-cheese">
//             <label for="feta">feta</label>
//             <input type="radio" name="feta" id="feta" value="feta">
//                 <label for="goat cheese">goat cheese</label>
//                 <input type="radio" name="goat cheese" id="goat cheese" value="goat cheese">
//                     <label for="mozzarella">mozzarella</label>
//                     <input type="radio" name="mozzarella" id="mozzarella" value="mozzarella">
//         </fieldset>
//     </form>
// </section>






const pizza = {}

pizza.toppingsCheese = {
    small: 8.50,
    medium: 10,
    large: 11.50,
}

pizza.contents = [];


$(function() {

    $('.pizza-size-clickable').change(function(event) {
        event.preventDefault();

        const pizzaSize = $('input[name=pizza-size]:checked').val();
        console.log(pizzaSize);

        // pizza.contents.push(pizzaSize);
        pizza.contents[0] = pizzaSize

        console.log(pizza.contents)













    })




})









    // <section class="wrapper" >
    //     <form action="">
    //         <fieldset class="pizza-size">

    //             <div class="pizza-size-contents">
    //                 <label for="small">small</label>
    //                 <input type="radio" name="pizza-size" id="small" value="small">
    //                 <p>$8.50</p>
    //             </div>
    //             <div class="pizza-size-contents">
    //                 <label for="medium">medium</label>
    //                 <input type="radio" name="pizza-size" id="medium" value="medium">
    //                 <p>$10.00</p>
    //             </div>
    //             <div class="pizza-size-contents">
    //                 <label for="large">large</label>
    //                 <input type="radio" name="pizza-size" id="large" value="large">
    //                 <p>$11.50</p>
    //             </div>
    //         </fieldset>
    //     </form>
    // </section>