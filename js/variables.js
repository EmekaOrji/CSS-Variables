const inputs = document.querySelectorAll("input");


function updateProperty() {
  const suffix = this.dataset.sizing || "";
  // console.log(suffix);
  document.documentElement.style.setProperty(`--${this.name}`, ((this.value / 10) + suffix));
}
inputs.forEach(input => input.addEventListener("input", updateProperty));