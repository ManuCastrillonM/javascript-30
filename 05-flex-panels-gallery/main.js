const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', togglePanel)
});

function togglePanel() {
  this.classList.toggle('panel--active');
}