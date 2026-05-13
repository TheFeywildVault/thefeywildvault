const crValues = [
  0,
  0.125,
  0.25,
  0.5,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30
];

function formatCR(value) {
  if (value === 0.125) return "1/8";
  if (value === 0.25) return "1/4";
  if (value === 0.5) return "1/2";
  return String(value);
}

function getSliderThumbCenter(slider, value) {
  const min = parseFloat(slider.min);
  const max = parseFloat(slider.max);
  const percent = (value - min) / (max - min);

  const sliderWidth = slider.offsetWidth;

  // Match this to your CSS thumb width.
  // If your thumb is 16px wide, leave this as 16.
  // If your thumb is 20px wide, change this to 20.
  const thumbWidth = 16;

  return (percent * (sliderWidth - thumbWidth)) + (thumbWidth / 2);
}

function updateDualRange(type, changedSlider) {
  const minSlider = document.getElementById(`${type}Min`);
  const maxSlider = document.getElementById(`${type}Max`);
  const rangeTrack = document.getElementById(`${type}RangeTrack`);
  const minBubble = document.getElementById(`${type}MinBubble`);
  const maxBubble = document.getElementById(`${type}MaxBubble`);

  if (!minSlider || !maxSlider || !rangeTrack || !minBubble || !maxBubble) {
    return;
  }

  let minIndex = parseInt(minSlider.value);
  let maxIndex = parseInt(maxSlider.value);

  if (changedSlider === "min" && minIndex > maxIndex) {
    minIndex = maxIndex;
    minSlider.value = minIndex;
  }

  if (changedSlider === "max" && maxIndex < minIndex) {
    maxIndex = minIndex;
    maxSlider.value = maxIndex;
  }

  let minValue = minIndex;
  let maxValue = maxIndex;

  if (type === "cr") {
    minValue = crValues[minIndex];
    maxValue = crValues[maxIndex];

    minBubble.textContent = formatCR(minValue);
    maxBubble.textContent = formatCR(maxValue);
  } else {
    minBubble.textContent = minValue;
    maxBubble.textContent = maxValue;
  }

  const minCenter = getSliderThumbCenter(minSlider, minIndex);
  const maxCenter = getSliderThumbCenter(maxSlider, maxIndex);

  rangeTrack.style.left = `${minCenter}px`;
  rangeTrack.style.width = `${maxCenter - minCenter}px`;

  minBubble.style.left = `${minCenter}px`;
  maxBubble.style.left = `${maxCenter}px`;

  minBubble.style.transform = "translateX(-50%)";
  maxBubble.style.transform = "translateX(-50%)";
}

document.addEventListener("DOMContentLoaded", () => {
  updateDualRange("cr", "min");
  updateDualRange("ac", "min");
});

window.addEventListener("resize", () => {
  updateDualRange("cr", "min");
  updateDualRange("ac", "min");
});