
function echo(arg) {
    let printArea = document.getElementById("main");
    let p = document.createElement("p");
    p.textContent = arg;
    printArea.appendChild(p);
} 


function getDay(date) {
  var dayOfWeek = new Date(date).getDay();    
  return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

getDay("1776-07-04");