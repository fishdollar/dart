var drop = document.getElementsByClassName('dropdown');
var flex = document.getElementsByClassName('flexbox');
for (var i = 0; i <= drop.length - 1; i++) {
     drop[i].addEventListener('click', function() {
         if (this.childNodes[7].style.display == 'flex') {
            this.childNodes[7].style.display = 'none';}
         else {this.childNodes[7].style.display = 'flex'};
     })
 }