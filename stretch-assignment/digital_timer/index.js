var oneLabel = document.getElementById("secondTens");
var twoLabel = document.getElementById("secondOnes");
var threeLabel = document.getElementById("msHundreds");
var fourLabel = document.getElementById("msTens");

var totalSeconds = 0;
setInterval(setTime, 10);

function setTime() {
    if (totalSeconds < 1000){
  ++totalSeconds;
  fourLabel.textContent = (totalSeconds % 10);
  threeLabel.textContent = (parseInt(totalSeconds / 10) % 10);
  twoLabel.textContent = (parseInt(totalSeconds / 100) % 10);
  oneLabel.textContent = (parseInt(totalSeconds / 1000) % 10);
    } else {
     const colorNav = document.querySelectorAll('.digit');
    colorNav.forEach(element =>{
        element.style.color = 'red';
    })
    }
}
