
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var x = xhttp.responseText;
      console.log(x.heroes.name);

    }
  };

  xhttp.open("GET", "https://raw.githubusercontent.com/hmccutchen/hero_scrapbook/master/heroes.json", true);
  xhttp.send();
