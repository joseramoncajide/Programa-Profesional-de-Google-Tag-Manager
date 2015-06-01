function () {
   for (var e = document.getElementsByTagName('iframe'), x = e.length; x--;)
   if (/vimeo.com\/video/.test(e[x].src)){
      return true;
   }
   return false;
}
