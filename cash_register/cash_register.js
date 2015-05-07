var line_items = [
    {description: "aardvark", price: 425, qty: -1},
    {description: "PruNe", price: 1.99, qty: 1},
    {description: "potato", price: .79, qty: -10},
    {description: "zebra", price: 525.25, qty: 1},
    {description: "SpinAch", price: 2.99, qty: 1},
    {description: "zepplin", price: 20000, qty: 1},
    {description: "PetUnia", price: 1.25, qty: 12},
    {description: "squash", price: 2.35, qty: 3}
];

var coupons = [
    {description: "Zebra", discount: 100, limit: 1},
    {description: "squash", discount: 1.00, limit: 1},
    {description: "mouse", discount: 2.00, limit: 10}
];

var $entries, 
    $subTotal;

$(document).ready(function(){

   $entries = $("#entries");
   $subTotal = $('#subtotal');

line_items.sort(function(a, b) {
     var textA = a.description.toUpperCase();
     var textB = b.description.toUpperCase();
     return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
 });

  myUtils.myEach(line_items, function(v,i){
    addItem(v.price, v.description, v.qty);
  });

  updateSubTotal();


});

function addItem(price, title, quantity) {
  // YUCK! Let's refactor this!
  

  var html_string = (
        "<tr>" +
          myUtils.buildElement("td", title) +
          myUtils.buildElement("td", quantity) +
          myUtils.buildElement("td", price) +
        "</tr>"
  );
  $entries.append(html_string);
}

function updateSubTotal() {

  var subTotalPrice = 0; 

  var stor = [];
  
  myUtils.myEach(line_items, function(v,i){
   
    stor.push(myUtils.toDollarAmount(v.price*v.qty));
  });
  
  subTotalPrice = myUtils.myReduce(stor, subTotalPrice);
  
  $subTotal.text("$" + subTotalPrice); 
  
  salesTax = myUtils.toDollarAmount(subTotalPrice * .00725)
  
  $('#salestax').text("$" + salesTax);
  
  var total = subTotalPrice + salesTax;
  
  $('#total').text("$" + total);
};







