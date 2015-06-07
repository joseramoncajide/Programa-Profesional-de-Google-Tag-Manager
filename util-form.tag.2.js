$(document).on('DOMNodeInserted', '.toast-success', function(e) {
    
    dataLayer.push({'event':'virtualPage', 'page': '/formulario_enviado', 'pageTitle': 'Gracias por registrarte'});

});

$(document).on('DOMNodeInserted', '.error', function(e) {
	
	//console.log(e.target);
	
	element = e.target;
	
	field = element.getAttribute('for');
    
    dataLayer.push({event:'gaEvent',eventCategory:'ERROR',eventAction: 'Contactar',eventLabel: field + ':' + element.textContent});
    
    
});
