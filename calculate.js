var currentQty = document.querySelectorAll("input.qty");

window.onload = function() {
  for (var i = 0; i < currentQty.length; i++) {
    currentQty[i].addEventListener("change", calcItemSubtotals);
    currentQty[i].addEventListener("change", calcSubtotal);
    currentQty[i].addEventListener("change", calcTaxTotal);
  }
  document.querySelector("form").addEventListener('submit', submitForm);
}

function submitForm (e) {
  e.preventDefault();
}

var itemSubtotal;

function calcItemSubtotals(e) { 
  var inputQtyChanged = parseFloat(e.target.value);
  var wafflePrice = e.target.nextElementSibling.querySelector("div span").innerText;      
  var wafflePriceNumber = parseFloat(wafflePrice);

  var itemSubtotal = wafflePriceNumber * inputQtyChanged; //Calc subtotal
  var itemSubtotalDecimals = itemSubtotal.toFixed(2); //Convert to 2 decimals

  e.target.nextElementSibling.querySelector("div .item-subtotal p").innerText = "$" + itemSubtotalDecimals; // Insert subtotal
}

function calcSubtotal(e) {
  //Check all item subtotals
  var runningSubtotalList = document.querySelectorAll("div .item-subtotal p");

  var runningSubtotal = 0;

  for (var i = 0; i < runningSubtotalList.length; i++) {
    var runningSubtotalString = runningSubtotalList[i].innerText;
    var runningSubtotalHundreds = runningSubtotalString.match(/\d/g).map(Number).join("");
    var runningSubtotalIterationValue = runningSubtotalHundreds / 100;
    var runningSubtotal = runningSubtotal + runningSubtotalIterationValue;
  }

  var runningSubtotalDecimals = runningSubtotal.toFixed(2); //Convert to 2 decimals

  var runningSubtotalP = document.createElement("p");    // Create a <p> element to go in the div
  runningSubtotalP.innerHTML = "$" + runningSubtotalDecimals;   // Insert subtotal

  var exisitingRunningSubtotalPElement = document.querySelectorAll(".subtotal-display p").length;

  if (exisitingRunningSubtotalPElement < 0) {
    // Add to p to div 
    document.querySelector(".subtotal-display").appendChild(runningSubtotalP);
  } else {  
    // Replace
    document.querySelector(".subtotal-display").replaceChild(runningSubtotalP, document.querySelector(".subtotal-display").childNodes[2]); 
  } 
}

function calcTaxTotal(e) {
  var runningTotalPreTax = 0;

  var runningTotalText = document.querySelector(".subtotal-display p").innerText;
  var runningTotalHundreds = runningTotalText.match(/\d/g).map(Number).join("");
  var runningTotalPreTax = runningTotalHundreds / 100; 

  var runningTotal = (runningTotalPreTax * .0825) + runningTotalPreTax;

  var runningTotalDecimals = runningTotal.toFixed(2); //Convert to 2 decimals

  var runningTotalP = document.createElement("p");    // Create a <p> element to go in the div
  runningTotalP.innerHTML = "$" + runningTotalDecimals;   // Insert subtotal

  var exisitingRunningTotalPElement = document.querySelectorAll(".total-display p").length;

  if (exisitingRunningTotalPElement < 0) {
  // Add to p to div 
  document.querySelector(".total-display").appendChild(runningTotalP);
  } else {  
  // Replace
  document.querySelector(".total-display").replaceChild(runningTotalP, document.querySelector(".total-display").childNodes[2]); 
  }
}

var formattedOrderTotalLength = 0;

function calculate() {

  var formattedOrderTotalLength = document.querySelectorAll(".total-display p").length;
  console.log(formattedOrderTotalLength);
  // var formattedOrderTotalListLength = formattedOrderTotalList.length;

  if (formattedOrderTotalLength === 0) {
    alert("Please add something to your cart");
  } 
  // else works
  else {
    var formattedOrderTotalP = document.querySelector(".total-display p"); 
    var formattedOrderTotalHTML = formattedOrderTotalP.innerHTML;
    console.log(formattedOrderTotalHTML);
    alert(formattedOrderTotalHTML);
  } 
}




