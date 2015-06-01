//toastr.success('Thank you for signing up.');
//toastr.error('An error occured. Please try again later.');

$(document).on('DOMNodeInserted', '.toast-success', function() {
    
	dataLayer.push({event:'gaevent', eventCategory:'Conversion', eventAction: 'Registro', eventLabel: ''});

});

$(document).on('DOMNodeInserted', '.error', function(e) {
	
	//console.log(e.target);
	
    element = e.target;
    
	dataLayer.push({event:'gaevent', eventCategory:'ERROR', eventAction: 'Contactar', eventLabel: element.textContent});
    
	element.getAttribute('for');

});
