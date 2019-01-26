window.onload = function(){
  var pageList = document.querySelectorAll('.page')
  pageList.forEach((v,i)=>{
    v.addEventListener("touchstart",touchStart,false)
    v.addEventListener("touchmove",touchMove,false)
    v.addEventListener("touchend",touchEnd,false)
  })
  document.body.addEventListener('touchmove',function (event) {
    event.preventDefault()
  },false)
  setTimeout(()=>{
    $('.meng').css("display","none")
    $('.page1').addClass('animation')
    var audio = document.getElementById('myAudio')
    if(audio !==null){
      audio.play()
    }
  },1000)
  resize()
}
var startY,endY,pageHeight,containerHeight,pageLength
var currentpage=0,scrollHeight=0,play = true
function touchStart(e) {
  startY = e.changedTouches[0].pageY
  console.log(e,'touchStart')
}
function touchMove(e) {
  endY = e.changedTouches[0].pageY
  if(endY > startY){
    scrollHeight -= 10
  }else{
    scrollHeight += 10
  }
  $('.container').css({"transition":"all 0.5s ease 0s","transform":"translateY(-"+scrollHeight+ "px)"})
}
function touchEnd(e) {
  endY = e.changedTouches[0].pageY
  if(startY - endY > 0){
    if(currentpage < pageLength -1){
      currentpage +=1
    }
    scrollHeight = pageHeight * currentpage
    curpage = ".page" + (currentpage + 1)
    indexpage = ".page" + currentpage
    $('.container').css({"transition":"all 0.5s ease 0s","transform":"translateY(-"+scrollHeight+ "px)"})
  }
  if(startY - endY < 0){
    if(currentpage >0){
      currentpage -=1
    }
    scrollHeight = pageHeight * currentpage
    curpage = ".page" + (currentpage + 1)
    indexpage = ".page" + (currentpage +2)
    $('.container').css({"transition":"all 0.5s ease 0s","transform":"translateY(-"+scrollHeight+ "px)"})
  }
  $(indexpage).removeClass('animation')
  $(curpage).addClass('animation')
}
function playMusic() {
  play = !play
  var audio = document.getElementById('myAudio')
  if(play){
    if(audio !==null){
      $('.musicIcon').css("animation-play-state","running")
      audio.play()
    }
  }else{
    if(audio !==null){
      $('.musicIcon').css("animation-play-state","paused")
      audio.pause()
    }
  }
}
function resize() {
  pageLength = $('.page').length
  pageHeight = $(window).height()
  containerHeight = pageHeight * pageLength
  $('.page').css({"height":pageHeight + 'px'})
  $('.container').css({"height":containerHeight + 'px'})
}