//Constructors
function Pizza(size, price) {
  this.size = size;
  this.price = price;
}

function Crust(type, price) {
  this.type = type;
  this.price = price;
}
function Topping(name, price) {
  this.name = name;
  this.price = price;
}

//Available Items
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

//create a menu
function menu() {
let text = "<h1>What we offer</h1><h2>Sizes</h2>"
sizes.forEach(function(size){
  text += size.size + " @ksh" + size.price + "<br>"

  });
  text += "<h2>Crusts</h2>"
  crusts.forEach(function(crust) {
    text += crust.type + " @Ksh" + crust.price + "<br>"
  });
  text += "<h2>Toppings</h2>"
  toppings.forEach(function(topping) {
    text += topping.name + " @Ksh"  + topping.price + "<br>"  
    
  });
document.getElementById("menu").innerHTML = text + "<br>" + '<button class="btn btn-success" id="p-order">Place Order</button>';
} 

//create an order from user inputs
function orderFromInputs(order) {
  let sizeIndex = $("#size").val();
  let crustIndex = $("#crust").val();
  let topIndex = $("#topping").val();
  let address = document.getElementById("location");
  

  let sizeSelected = sizes[sizeIndex];
  let crustSelected = crusts[crustIndex];
  let toppingSelected = toppings[topIndex];

  let number = parseInt($("input#orders").val()) || 1;
  let deliveryFee = 150;

  let total = sizeSelected.price + crustSelected.price + toppingSelected.price
  total *= number;
  
  let deliver = document.getElementById("delivery");
  if (deliver.checked) {
    total += deliveryFee;
  }

   document.getElementById("o-size").innerHTML = "size" +"----- " + sizeSelected.size;
   document.getElementById("o-crust").innerHTML = "Crust" + "----- " + crustSelected.type;
   document.getElementById("o-top").innerHTML = "Toppings" + "----- " + toppingSelected.name;
   document.getElementById("quantity").innerHTML = "Quantity" + "----- " + number;
   document.getElementById("cost").innerHTML = "Cost" + "----- " + "Ksh" + total;
};

//For the input form

function sizeOptions() {
  let options = "<option disabled selected>Select size:</option>"
  sizes.forEach(function(size, index) {
    options += "<option value='" + index + "'>" + size.size + " @Ksh" + size.price + "</option>"
  })
  document.getElementById("size").innerHTML = options;
}

function crustOptions() {
  let options = "<option disabled selected>Select crust:</option>"
  crusts.forEach(function(crust, index) {
    options += "<option value='" + index + "'>"+  crust.type + " @Ksh" + crust.price + "</option>"
  });
  document.getElementById("crust").innerHTML = options;
}

function toppingOptions() {
  let options = "<option disabled selected>Select topping:</option>"
  toppings.forEach(function(topping, index) {
    options += "<option value='" +index +"'>" + topping.name + " @Ksh" + topping.price + "</option>"
  });
  document.getElementById("topping").innerHTML = options;
}

function resetFields(){
    $("#size").prop("selectedIndex", 0);
    $("#crust").prop("selectedIndex", 0);
    $("#topping").prop("selectedIndex", 0);
    $("#orders").val("");
}

//UI
$(document).ready(function(){
  $("#mennu").click(function() {
    menu();
    $("#menu").toggle(200);
  });

  

  $("#confirm").click(function(event) {
    event.preventDefault();
    orderFromInputs();
    $("#summary").show();
    
  });
  $(document).on("click", "#p-order", function(){
    $("#order-form").show();
      sizeOptions();
      crustOptions();
      toppingOptions();
  })
  $("#submit").click(function(event){
    event.preventDefault();
    alert("Your order has been received and will be processed shortly");
    $("#summary").hide();
    resetFields();
  })
});