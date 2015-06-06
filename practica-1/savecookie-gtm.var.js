<script type="text/javascript"> 
/*
Crea un cookie y almacena el "Tradedoubler's unique identifier" 
*/
  var d = new Date();
  d.setTime(d.getTime() + (3600*24*365));
  var expires = "expires=" + d.toUTCString();
  document.cookie = "tduid=" + {{URL tduid}} + ";" + expires + ";domain=.{{Cookie domain}};path=/";;
</script>
