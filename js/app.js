
window.addEventListener('load', function(event) {
  var divKitten = document.getElementById('div-kitten'); 
  var textKitten = document.getElementById('text-kitten');
  divKitten.addEventListener('click', function(event) {
    textKitten.classList.toggle('none');
    textKitten.classList.toggle('kitten-text');
    // textKitten.innerHTML = '';
  });
});