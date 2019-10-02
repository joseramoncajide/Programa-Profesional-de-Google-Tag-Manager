# Curso Avanzado de Google Tag Manager

**Códigos para el caso práctico**

## Eventos

```javascript
toastr["success"](" ", "Producto añadido al carrito correctamente")
```

## Navegar por DOM

```javascript
let e = document.getElementById("addToCart")
e.parentNode
e.parentNode.parentNode

//Opción 1
e.parentNode.parentNode.nextSibling
e.parentNode.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.innerText

//Opción 2
e.parentNode.parentNode.parentNode.lastElementChild

//Opción 3
e.parentNode.parentNode.parentNode
e.parentNode.parentNode.parentNode.childNodes[5].innerText
e.parentNode.parentNode.parentNode.children[2].innerText

e.parentNode.parentNode.parentNode.children[2].innerText.split(" ")

e.parentNode.parentNode.parentNode.children[2].innerText.split(" ")[0]

//JQuery
$('#addToCart').parents('.member').find('.thin').text().split(" ")[0]
```


## Listeners

### Adjuntar un listener a un elemento

```javascript
// Javascript
let e = document.getElementById("addToCart")
e.addEventListener("mouseover",function(event) {
  console.log("Agregado al carrito")
  /* PON AQUÍ TU CODIGO */

});

// JQuery
$('#addToCart').mouseover(function(event) {
  console.log("Agregado al carrito")
  /* PON AQUÍ TU CODIGO */
});
```

### Adjuntar un listener a múltiples elementos
```javascript
// Javascript
let botones_carrito = document.querySelectorAll("#addToCart");

botones_carrito.forEach(function(event) {
    event.addEventListener("mouseover", function() {
      toastr["success"](" ", "Producto añadido al carrito correctamente")
    });
});

// JQuery
$(document).on("mouseover","#addToCart", function(event) {
  toastr["success"](" ", "Producto añadido al carrito correctamente")
});

```

## Medición con Google Analytics


```javascript
var xhr = new XMLHttpRequest();
xhr.open("POST", 'http://www.google-analytics.com/collect?v=1&tid=UA-62172390-1&cid=1234567&t=pageview&dp=%2Fhome', true);
xhr.send(null);

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
    }
}
xhr.open("POST", 'http://www.google-analytics.com/debug/collect?v=1&tid=UA-62172390-1&cid=1234567&t=pageview&dp=%2Fhome', true);
xhr.send(null);
```

**Variables**

```javascript
// Dominio del usuario
console.log(window.location.hostname)

// Página por la que navega el usuario
console.log(window.location.pathname)

// Título de la página
console.log(document.title)

// Navegador del usuario
console.log(navigator.userAgent)

```

## Evento agregar al carrito en GA
```javascript

// Javascript
let botones_carrito = document.querySelectorAll("#addToCart");

botones_carrito.forEach(function(event) {
    event.addEventListener("mouseover", function() {
      toastr["success"](" ", "Producto añadido al carrito correctamente")
      var xhr = new XMLHttpRequest();
      xhr.open("POST", 'http://www.google-analytics.com/collect?v=1&tid=UA-62172390-1&cid=1234567&t=event&dp=%2Fhome&ec=Carrito&ea=Agregar', true);
      xhr.send(null);
    });
});

// JQuery
$(document).on("mouseover","#addToCart", function(event) {
  toastr["success"](" ", "Producto añadido al carrito correctamente")
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'http://www.google-analytics.com/collect?v=1&tid=UA-62172390-1&cid=1234567&t=event&dp=%2Fhome&ec=Carrito&ea=Agregar', true);
  xhr.send(null);
});

```

**Lanzar un hit a GA y comprobar resultado**

```javascript

// Javascript
let botones_carrito = document.querySelectorAll("#addToCart");

botones_carrito.forEach(function(event) {
    event.addEventListener("mouseover", function() {
      toastr["success"](" ", "Producto añadido al carrito correctamente")
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.responseText);
        }
      }
      xhr.open("POST", 'http://www.google-analytics.com/collect?v=1&tid=UA-62172390-1&cid=1234567&t=event&dp=%2Fhome&ec=Carrito&ea=Agregar', true);
      xhr.send(null);
    });
});


// JQuery
$(document).on("mouseover","#addToCart", function(event) {
  toastr["success"](" ", "Producto añadido al carrito correctamente")
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
    }
  }
  xhr.open("POST", 'hhttp://www.google-analytics.com/collect?v=1&tid=UA-62172390-1&cid=1234567&t=event&dp=%2Fhome&ec=Carrito&ea=Agregar', true);
  xhr.send(null);
});

```

### Acceder a elementos del DOM: Encontrar el nombre de un producto

```javascript


document.querySelector("#team > div > div.section-content.row > div:nth-child(1) > span")

document.querySelector("#team > div > div.section-content.row > div:nth-child(2) > span")

document.querySelector("#team > div > div.section-content.row > div:nth-child(1) > span").innerText

document.querySelector("#team > div > div.section-content.row > div > span").innerText

document.querySelectorAll("#team > div > div.section-content.row > div > span")

document.querySelectorAll("#team > div > div.section-content.row > div > span")[0].innerText

```

**Agregar el nombre del producto al evento**

```javascript

// Esto no es correcto: ¿Cómo acceder a cada nombre de producto?
let botones_carrito = document.querySelectorAll("#addToCart");

botones_carrito.forEach(function(event) {
    event.addEventListener("mouseover", function() {
      var productName = document.querySelectorAll("#team > div > div.section-content.row > div > span")[0].innerText
      console.log(productName)
      toastr["success"](" ", productName + " añadido al carrito correctamente")
    });
});

```

**Solución:**

```javascript
// Javascript
let botones_carrito = document.querySelectorAll("#addToCart");

botones_carrito.forEach(function(event, index) {
    event.addEventListener("mouseover", function() {
      var productName = document.querySelectorAll("#team > div > div.section-content.row > div > span")[index].innerText
      console.log(productName)
      toastr["success"](" ", productName + " añadido al carrito correctamente")
    });
});

```

### Soluciones finales

**a. Sin medición:**

```javascript

// Javascript
let botones_carrito = document.querySelectorAll("#addToCart");

botones_carrito.forEach(function(event) {
    event.addEventListener("mouseover", function() {
      var productName = this.getAttribute('data-product-name');
      console.log(productName)
      toastr["success"](" ", productName + " añadido al carrito correctamente")
    });
});

// JQuery
$(document).on("mouseover","#addToCart", function(event) {
  // e.preventDefault();
  var productName = $(event.target).closest('a').data('product-name');
  console.log(productName)
  toastr["success"](" ", productName + " añadido al carrito correctamente")
});

```
**a. Con medición:**
```javascript

// Javascript
let botones_carrito = document.querySelectorAll("#addToCart");

botones_carrito.forEach(function(event) {
    event.addEventListener("mouseover", function() {
      var productName = this.getAttribute('data-product-name');
      console.log(productName)
      toastr["success"](" ", productName + " añadido al carrito correctamente")

      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.responseText);
        }
      }
      xhr.open("POST", 'http://www.google-analytics.com/collect?v=1&tid=UA-62172390-1&cid=1234567&t=event&dp=%2Fhome&ec=Carrito&ea=Agregar&el=' + productName, true);
      xhr.send(null);

    });
});

// JQuery
$(document).on("mouseover","#addToCart", function(event) {
  // e.preventDefault();
  var productName = $(event.target).closest('a').data('product-name');
  console.log(productName)
  toastr["success"](" ", productName + " añadido al carrito correctamente")

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
    }
  }
  xhr.open("POST", 'http://www.google-analytics.com/collect?v=1&tid=UA-62172390-1&cid=1234567&t=event&dp=%2Fhome&ec=Carrito&ea=Agregar&el=' + productName, true);
  xhr.send(null);
  });



```

Autor: @jrcajide
