var a = ["Teatree Care Solution", "Soft Foot Peeling Socks", "Roselle Tea Eye Gel Patch"];
var len = 3;
document.getElementById("shoppingcart").innerHTML = a;
len = a.length;
document.getElementById("shoppingcartlen").innerHTML = len;

function add() {
  a.push("Item");
  document.getElementById("shoppingcart").innerHTML = a;
  len = a.length;
  document.getElementById("shoppingcartlen").innerHTML = len;
}
