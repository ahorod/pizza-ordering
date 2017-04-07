//business logic
//constructor for Pizza
function Pizza(toppings, size, promo) {
  this.toppings = toppings;
  this.size = size;
  this.promo = promo;
  this.count = 0;
  this.price = 10;
}
function Client (name, address, phone){
  this.name = name;
  this.address = address;
  this.phone = phone;
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
  else {
    this.price = 10
  }

  if (this.count > 0) {
    this.price += this.count*2;
  }
  if (this.promo = "SPRING"){
    this.price -= 3;
  }


  return(this.price);
}
//function resets form
function resetFields() {
    $(".toppings").prop( "checked", false );
    $("select.size").val("medium");

}

// user interface logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var inputtedToppings = [];
    $("input:checkbox[class=toppings]").each(function(){
      if($(this).is(':checked')){
          inputtedToppings.push(($(this).val()));
      }
      });

    var inputtedSize= $("select.size").val();
    var inputtedPromo= $("input#promo").val();
    var newPizza = new Pizza(inputtedToppings, inputtedSize, inputtedPromo);

    var inputtedName = $("input#name").val();
    var inputtedAddress = $("input#address").val();
    var inputtedPhone = $("input#phone").val();
    var newClient = new Client(inputtedName, inputtedAddress, inputtedPhone);

    newPizza.countChecked();
    var resultPrice = newPizza.pizzaPrice();


      $("#show-price").show();
      $("#client-name").text(newClient.name);
      $("#client-address").text(newClient.address);
      $("#client-phone").text(newClient.phone);
      
      $("#toppings").text(newPizza.toppings);
      $("#size").text(newPizza.size);
      $("#price").text(resultPrice + "$");

      if (resultPrice >=15){
        $("#gift").show();
      }
      else {
        $("#gift").hide();
      }


    resetFields();

  });
    });
