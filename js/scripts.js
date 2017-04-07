//business logic
//constructor for Pizza
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.count = 0;
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

// function readCheckboxes() {
//   var checkedValue = null;
//   var inputElements = document.getElementsByClassName('toppings');
//   for(var i=0; inputElements[i]; ++i){
//         if(inputElements[i].checked){
//              checkedValue = inputElements[i].value;
//              break;
//         }
//   }
//
// }


// user interface logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var inputtedToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
    inputtedToppings.push($(this).val());
});
    // $("input[name='toppings']:checked").each(function (i) {
    //   inputtedToppings.push((this).val());
    // });

    console.log(inputtedToppings);

    var inputtedSize= $("select.size").val();

    var newPizza = new Pizza(inputtedToppings, inputtedSize);
    newPizza.countChecked();

    var resultPrice = newPizza.pizzaPrice();


      $("#show-price").show();

    $("#toppings").text(newPizza.toppings);
      $("#size").text(newPizza.size);

      $("#price").text(resultPrice);

    resetFields();

  });
});
