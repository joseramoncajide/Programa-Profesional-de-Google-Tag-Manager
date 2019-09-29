//JavaScript
var orderNumber = document.querySelector("#hero > div > div > ul > li > span").innerText;

//jQuery
var orderNumber = jQuery('#hero > div > div > ul > li > span').first().text()

//JavaScript
var orderValue = document.querySelector("#hero > div > div > ul > li:nth-child(2) > span").innerText.replace(/ €/, "");

//jQuery
var orderNumber = jQuery('#hero > div > div > ul > li > span').last().text().replace(/ €/, "");
