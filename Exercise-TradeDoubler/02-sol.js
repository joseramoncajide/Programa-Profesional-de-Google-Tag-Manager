/*
URL de transacción
http://jrcajide.milanding.ovh/order_received.php?order=ES-123456
*/

var params = (new URL(document.location)).searchParams;
var name = params.get("order");
var order_number = name.split("-")[1]

function getOrderNumber() {
 	var params = (new URL(document.location)).searchParams;
	var name = params.get("order");
	var order_number = name.split("-")[1]
	return order_number
}
