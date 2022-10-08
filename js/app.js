var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}
function key_string(title,data){
    _data_string = ""
    for (var i in data){
        _data_string += "<li>"
        _data_string += data[i]
        _data_string += "</li>"
    }
    return '<span class="caret">'+title+'</span><ul class="nested">'+_data_string+'</ul>'
}

document.getElementById("myUL").innerHTML = '<li>'+'%data%'+'</li>';
// Always should be bottom of the script
includeHTML();

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}