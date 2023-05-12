document.querySelector('#submit').addEventListener("click", visibility);
function visibility(){
  document.querySelector('#thankyou').style.display = "flex";
  document.querySelector('#feedback').style.display = "none";
};

document.querySelector('.rating1').addEventListener("click", rate1);
function rate1(){
  document.querySelector('#feednum').innerHTML = "<p>1</p>";
};

document.querySelector('.rating2').addEventListener("click", rate2);
function rate2(){
  document.querySelector('#feednum').innerHTML = "<p>2</p>";
};

document.querySelector('.rating3').addEventListener("click", rate3);
function rate3(){
  document.querySelector('#feednum').innerHTML = "<p>3</p>";
};

document.querySelector('.rating4').addEventListener("click", rate4);
function rate4(){
  document.querySelector('#feednum').innerHTML = "<p>4</p>";
};

document.querySelector('.rating5').addEventListener("click", rate5);
function rate5(){
  document.querySelector('#feednum').innerHTML = "<p>5</p>";
};
