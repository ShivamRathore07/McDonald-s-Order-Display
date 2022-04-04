var data = {
    Crispy_Chicken_Sandwich:"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-spicy-crispy-chicken-sandwich:1-4-product-tile-desktop",
    World_Famous_Fries:"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-fries-small:1-4-product-tile-desktop",
    Double_Cheeseburger:"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Double-Cheeseburger-1:1-4-product-tile-desktop",
    McCafé_Beverages:"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-americano-1:1-4-product-tile-desktop",
    Big_Mac_Combo_Meal:"https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Big-Mac-Extra-Value-Meals:1-4-product-tile-desktop",
    Deluxe_Crispy_Sandwich:"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-deluxe-crispy-chicken-sandwich:1-4-product-tile-desktop",
}
function orderFood(){
  function time(){
  let time = Math.random()*10000;
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(orderFood);
    },time);
  });
}
time().then(res);
}


function res() {
document.getElementById("display").innerHTML = "";
var checkbox = document.getElementsByClassName("meal");

var arr = [];
for (var i = 0; i < checkbox.length; i++) {
  if (checkbox[i].checked === true) {
    arr.push(checkbox[i].value);
  }   
}

document.querySelector("#greet").innerHTML = "";
document.querySelector("#greet").innerHTML ="Your Order is ready..."; 
var randomNumber = Math.floor(Math.random() * 100 + 1);
document.querySelector("#order").innerHTML = "Order No. : " + randomNumber;

for (var j = 0; j < arr.length; j++) {
  for (key in data) {
    if (arr[j] == key) {
      let small_div = document.createElement("div");
      
      let forImg = document.createElement("img");
      forImg.src = data[key];
      forImg.className="image1"
      
      let forName = document.createElement("p");
      forName.textContent = key;
      
      small_div.append(forImg, forName);
      document.querySelector("#display").append(small_div);
    }
  }
}
}