$(document).on('DOMNodeInserted', '.toast-success', function(e) {
    
    dataLayer.push({event:'gaevent',eventCategory:'Conversion',eventAction: 'Contactar',eventLabel: ''});

});

$(document).on('DOMNodeInserted', '.error', function(e) {
	
	//console.log(e.target);
	
	element = e.target;
	
	field = element.getAttribute('for');
    
    dataLayer.push({event:'gaevent',eventCategory:'ERROR',eventAction: 'Contactar',eventLabel: field + ':' + element.textContent});
    
    
});
