//business logic
//constructor for Pizza
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 10;
}
//prototype generates ticket information
Pizza.prototype.PizzaInfo = function() {
  return this.toppings + " " + this.size;
}
//prototype that calculates pizza price
Pizza.prototype.pizzaPrice = function() {
  if (this.size === "large") {
    this.price +=5;
  }

  if (this.toppings != "none") {
    this.price +=3;
  }

  return(this.price);
}
//function resets form
function resetFields() {
    $("input.toppings").val("none");
    $("select.size").val("");
}

// user interface logic
$(document).ready(function() {


  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var inputtedToppings = [];
    $("input[name='toppings']:checked").each(function (i) {
      inputtedToppings[i] = $(this).val();
    });

    var inputtedSize= $("select.size").val();


    var newPizza = new Pizza(inputtedToppings, inputtedSize);

    var resultPrice = newPizza.pizzaPrice();


      $("#show-price").show();

      $("#toppings").text(newPizza.toppings);
      $("#size").text(newPizza.size);
      $("#price").text(resultPrice);
      console.log(inputtedToppings);

    resetFields();

  });
});
