const controls = document.querySelectorAll('input');

controls.forEach(control => {
  control.addEventListener('change', updateUI)
});

function updateUI() {
  const sizing = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`,`${this.value}${sizing}`);
}
