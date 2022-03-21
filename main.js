//variables
var a = ["Teatree Care Solution", "Soft Foot Peeling Socks", "Roselle Tea Eye Gel Patch"];
var len = 3;
//document.getElementById("shoppingcart").innerHTML = a;
//len = a.length;
//document.getElementById("shoppingcartlen").innerHTML = len;

// add function when users press "add to cart"
function add() {
  a.push("Item");
  //document.getElementById("shoppingcart").innerHTML = a;
  len = a.length;
  document.getElementById("shoppingcartlen").innerHTML = len;
}

// function switch() {
//  var Image_Id = document.getElementById('product3_image');
//  if (Image_Id.src.match("images/pp1.png")) {
//    Image_Id.src = "images/p2p1.png";
//  }
//  else {
//    Image_Id.src = "images/pp1.png";
//  }
// }
