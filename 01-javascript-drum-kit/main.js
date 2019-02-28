function playSound(e) {
  const audioElement = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audioElement) return;
  audioElement.currentTime = 0;
  audioElement.play();
  key.classList.add('key--active');
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('key--active');
}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});