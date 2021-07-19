const inputs = document.querySelectorAll("input");


function updateProperty() {
  const suffix = this.dataset.sizing || "";
  console.log(suffix);
  document.documentElement.style.setProperty(`--${this.name}`, (this.value + suffix));
}
inputs.forEach(input => input.addEventListener("change", updateProperty));
inputs.forEach(input => input.addEventListener("mousemove", updateProperty));
