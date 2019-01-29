function random(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function position(){
  return this.random(1, 100)
}
function delay(){
  return this.random(1, 4)
}
function duration(){
  return this.random(4, 8)
}
function name(){
  console.log(this.random(1, 4).toString())
  return this.random(1, 4).toString()
}
function timing(){
  return ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'][this.random(0, 4)]
}

function createSnow() {
  for(var i = 0; i <= 10; ++i){
      var text1 = "<span class='animation span' data-animation-position = " +this.position()+ " data-animation-delay=" +this.delay()+ " data-animation-timing=" +this.timing()+ " data-animation-duration="+this.duration()+ " data-animation-name=" +this.name()+ "></span>"
      $(".page").append(text1);
  }
}
window.onload = function () {
  createSnow()
}

