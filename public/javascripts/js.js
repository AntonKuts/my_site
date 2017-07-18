// [
//   {
//     en: {
//       title: 'London',
//       ...
//     },
//     ru: {
//       title: 'Лондон',
//       ...
//     }
//   }
// ]



//big and small pic
var arr_fotos = ['fam.jpg', 'inov.jpg', 'teach.jpg', 'art.jpg', 'footboll.jpg', 'charity.jpg']
for (var i = 0; i < document.getElementsByClassName('box').length; i++) {
  document.getElementsByClassName('box')[i].src = 'images/' + arr_fotos[i];
  document.getElementsByClassName('boxForFoto')[i].src = 'images/' + arr_fotos[i];
  document.getElementsByClassName('boxForFoto')[i].style.border = '2px solid black';
}
for (var i = 0; i < document.getElementsByClassName('boxForFoto').length; i++) {
  document.getElementsByClassName('boxForFoto')[i].onclick = fStart;
}
function fStart() {
  active_foto = this.src;
  document.getElementById('mainImeg').src = active_foto;
  for (var i = 0; i < document.getElementsByClassName('boxForFoto').length; i++) {
    document.getElementsByClassName('boxForFoto')[i].style.border = '2px solid black';
    this.style.border = '2px solid #dd3cd6';
  }
}

//time
function time() {
var myDate = new Date();
var hour = myDate.getHours();
var minute = myDate.getMinutes();
if (minute < 10) {
    minute = "0" + minute;
}
for (var i = 0; i < 2; i++) {
document.getElementsByClassName('time')[i].innerHTML = (hour + ":" + minute);
}
setInterval(time, 59000);
}
time();
