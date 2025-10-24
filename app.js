// current scale factor (like 1x, 0.5x, 2x)
let scale = 1;

// this function runs when you click 0.5x / 1x / 2x
function setScale(factor) {
  scale = factor;
  updateQuantities();
}

// find all <span data-base="..."> elements and recalc
function updateQuantities() {
  const qtySpans = document.querySelectorAll('#quantity-list span[data-base]');
  qtySpans.forEach(span => {
    const baseValue = parseFloat(span.getAttribute('data-base'));
    const newValue = baseValue * scale;
    // show clean numbers: 1 decimal if needed
    span.textContent = Number.isInteger(newValue)
      ? newValue
      : newValue.toFixed(1);
  });
}

// run once on load, just in case
updateQuantities();
console.log("Recipe page ready.");
