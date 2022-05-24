let toggleicon = document.getElementsByClassName('togle-section')[0];
let navbar = document.getElementsByClassName('nav')[0];
toggleicon.onclick = function(){
    navbar.classList.toggle('actived');
}
