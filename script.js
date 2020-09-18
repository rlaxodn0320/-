function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === '밤') {
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = '낮'

    var links = document.querySelectorAll('a');
    var i = 0;
    while(i < links.length) {
      links[i].style.color='skyblue';
      i = i + 1;
    }
  } else {
    target.style.backgroundColor = 'GhostWhite';
    target.style.color = 'black';
    self.value = '밤'

    var links = document.querySelectorAll('a');
    var i = 0;
    while(i < links.length) {
      links[i].style.color='cadetblue';
      i = i + 1;
    }
  }
}
