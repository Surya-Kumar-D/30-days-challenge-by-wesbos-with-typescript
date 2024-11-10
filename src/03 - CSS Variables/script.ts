const inputs = document.querySelectorAll(".controls input");
console.log(inputs);
function handleUpdate(this: HTMLInputElement, e: Event) {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
}

inputs.forEach((input) => input.addEventListener("input", handleUpdate));
