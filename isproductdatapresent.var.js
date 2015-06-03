function () {
	var a = document.querySelectorAll('[data-product-id]');
	
	if(a && a.length > 0) {
		return a.length
	} else {
 		return undefined;
	}
}
