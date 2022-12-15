const displayOrders = localStorage.getItem("drink");

if (displayOrders >= 1) {
  document.getElementById("drink").innerHTML = displayOrders;
} else {
  document.getElementById("drink").innerHTML = "0";
}
