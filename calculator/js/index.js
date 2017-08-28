;
var button = document.getElementsByTagName('input');
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', action);
};

var expresion = '';
var defNull = 0;

function action() {

  if (this.value != "=" & this.value != "C" & this.value != "<<" & this.value !="+/-") {
    expresion += this.value;
    resLine = document.getElementById('typing_field').innerHTML = expresion;
  } else if (this.value == "=") {
    var resLine = document.getElementById('typing_field').innerHTML = Number(eval(expresion).toFixed(7));
    expresion = '';
  } else if (this.value == "C") {
    expresion = '';
    resLine = document.getElementById('typing_field').innerHTML = defNull;
  } else if (this.value == "<<") {
    expresion = expresion.slice(0, -1);
    if (expresion.length == 0){
      resLine = document.getElementById('typing_field').innerHTML = defNull;
    } else {
      resLine = document.getElementById('typing_field').innerHTML = expresion;
    }
  }
}
