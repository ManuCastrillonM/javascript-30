const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastchecked;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck);
});

function handleCheck(e) {
  if(e.shiftKey && this.checked) {
    let inBetween = false;

    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastchecked) {
        inBetween = !inBetween;
      }

      if(inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastchecked = this;
}
