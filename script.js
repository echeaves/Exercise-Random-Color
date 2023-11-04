const colors = ['#2FF3E0','#FA26A0', '#F8D210','#FF0080','#5429DA','F6F1CD','FFC70F'];

function getRandomColorIndex(){
  return Math.floor(Math.random()* colors.length);
}
const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', function(){
  const randomIndex = getRandomColorIndex();
  const randomColor = colors[randomIndex]
  document.body.style.backgroundColor = randomColor;

})

