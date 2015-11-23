function readFile(file, make){
  var xhttp;

  if (window.XMLHttpRequest) xhttp = new XMLHttpRequest();
  else xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  
  xhttp.open('GET', file, true);
  xhttp.overrideMimeType('text/plain');
  xhttp.send();

  xhttp.onreadystatechange = function (){
    if(xhttp.readyState == 4)
      make(xhttp.responseText);
  }
}
