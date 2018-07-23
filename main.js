
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var x = xhttp.responseText;
       var y = JSON.parse(x);
    name = y.universe.heroes.name;
  }


function createHero(name){

name = name;

  batman = {
    name: name
  }
  console.log(name);
}
createHero(name);
};

xhttp.open("GET", "https://raw.githubusercontent.com/hmccutchen/hero_scrapbook/master/heroes.json", true);
xhttp.send();




