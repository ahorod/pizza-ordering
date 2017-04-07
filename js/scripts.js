//business logic
//constructor for Pizza
function Pizza(count, size) {
  this.count = count;
  this.size = size;
  this.price = 10;
}

Pizza.prototype.countChecked = function (){
  this.count = $( "input:checked" ).length;
  console.log(this.count);
}
//prototype that calculates pizza price
Pizza.prototype.pizzaPrice = function() {
  if (this.size === "large") {
    this.price +=5;
  }

  if (this.count > 0) {
    this.price += this.count*2;
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

    // var inputtedToppings = [];
    // $("input[name='toppings']:checked").each(function (i) {
    //   inputtedToppings[i] = $(this).val();
    // });

    var inputtedSize= $("select.size").val();

    var newPizza = new Pizza(inputtedSize);
    var inputtedCount = newPizza.countChecked();
    console.log(newPizza.count);

    var resultPrice = newPizza.pizzaPrice();


      $("#show-price").show();

      $("#toppings").html( $("input:checked" ).val());
      $("#size").text(newPizza.size);
      $("#price").text(resultPrice);


    resetFields();

  });
});
