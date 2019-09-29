/*
URL de transacción
http://jrcajide.milanding.ovh/order_received.php?order=ES-123456
*/

window.location.search.substring(1).split("=")[1].split("-")[1]

// Lo transformamos en una función y lo llevamos a nueva variable en GTM

function getOrderNumber() {
  return window.location.search.substring(1).split("=")[1].split("-")[1]
}
