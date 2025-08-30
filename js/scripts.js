function Pizza(size, price) {
  this.size = size;
  this.price = price;
  this.crust = [];
}

function Crust(type, price) {
  this.type = type;
  this.price = price;
}
function Topping(name, price) {
  this.name = name;
  this.price = price;
}

var small = new Pizza("Small", 500);
var medium = new Pizza("Medium", 900);
var large = new Pizza("Large", 1200);

var sizes = [small, medium, large]

var crispy = new Crust("Crispy", 350);
var stuffed = new Crust("Stuffed", 200);
var glutten = new Crust("Glutten-free", 150);

var crusts = [crispy, stuffed, glutten]

var pepperoni = new Topping("Pepperoni", 300);
var supreme = new Topping("Supreme", 400);
var ham = new Topping("Hawaiian(Ham & Pineapple)", 250);
var bbq = new Topping("BBQ Meatlovers", 350);
var gbpc = new Topping("Garlic Butter Prawns and Chilli", 400);
var sk = new Topping("Sausage & Kale", 300)

var toppings = [pepperoni, supreme, ham, bbq, gbpc, sk]

function menu() {
let text = "<h1>What we offer</h1><br>"
sizes.forEach(function(size){
  text += size.size + " @ksh" + size.price + "<br>"

  });
  text += "<h1>Crusts</h1>"
  crusts.forEach(function(crust) {
    text += crust.type + " @Ksh" + crust.price + "<br>"
  });
  text += "<h1>Toppings</h1>"
  toppings.forEach(function(topping) {
    text += topping.name + " @Ksh"  + topping.price + "<br>"
  });
document.getElementById("menu").innerHTML = text;
} 

function orderFromInputs(order) {
  var size = order.find("input.size").val();
  var crust = order.find("input.crust").val();
  var topping = order.find("input.topping").val();
  
};

$(document).ready(function(){
  $("#mennu").click(function() {
    menu();
  });
});