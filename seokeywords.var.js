function () {
	var kw = [];
	
	var metas = document.getElementsByTagName('meta'); 
      for (i=0; i<metas.length; i++) { 
            if (metas[i].getAttribute("name") == "keywords") { 
            	kw.push( metas[i].getAttribute("content") );
            } 
      }
      
      var text = "textContent" in document.body ? "textContent" : "innerText";
      var h1 = document.getElementsByTagName("h1")[0][text];
      kw.push(h1); 
      
      return kw;
}
