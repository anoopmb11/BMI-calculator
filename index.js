const heightRangeInputEl = document.querySelector("#heightRangeInput");
const heightTextInputEl = document.querySelector("#heightTextInput");
const weightRangeInputEl = document.querySelector("#weightRangeInput");
const weightTextInputEl = document.querySelector("#weightTextInput");
const weightUnitEl = document.querySelector("#weightUnit");
const heightUnitEl = document.querySelector("#heightUnit");

const weightMeasureEl = document.querySelector("#weightMeasure");
const heightMeasureEl = document.querySelector("#heightMeasure");

const selectEl = document.querySelector("#units");

const selectedUnitIndex = selectEl.options.selectedIndex;

selectEl.onchange = function () {
  if (selectEl.options.selectedIndex === 0) {
    heightMeasureEl.innerText = "Cm";
    weightMeasureEl.innerText = "kg";
  } else if (selectEl.options.selectedIndex === 1) {
    heightMeasureEl.innerText = "Ft";
    weightMeasureEl.innerText = "Pounds";
  }
};

function syncHeightRange(heightRangeInputEl, heightTextInputEl) {
  //   heightRangeInputEl.value = heightTextInputEl.value;
  heightTextInputEl.value = heightRangeInputEl.value;
}

function syncHeightInput(heightRangeInputEl, heightTextInputEl) {
  heightRangeInputEl.value = heightTextInputEl.value;
  //   heightTextInputEl.value = heightRangeInputEl.value;
}

heightRangeInputEl.addEventListener("change", function () {
  syncHeightRange(heightRangeInputEl, heightTextInputEl);
  calculateBmi();
});
heightTextInputEl.addEventListener("change", function () {
  syncHeightInput(heightRangeInputEl, heightTextInputEl);
  calculateBmi();
});

weightRangeInputEl.addEventListener("change", function () {
  syncWeightRange(weightRangeInputEl, weightTextInputEl);
  calculateBmi();
});

function syncWeightRange(weightRangeInputEl, weightTextInputEl) {
  weightTextInputEl.value = weightRangeInputEl.value;
  calculateBmi();
}

weightTextInputEl.addEventListener("change", function () {
  weightRangeInputEl.value = weightTextInputEl.value;
});
// addEventListener = {
//   addEventListener(eventName, functiontoRun) {
//     // event when triggers
//     functiontoRun();
//   },
// };

function calculateBmi() {
  const heightValueinMeter = heightRangeInputEl.value / 100;
  const weightValue = weightTextInputEl.value;
  if (selectedUnitIndex === 0) {
    const bmi = weightValue / Math.pow(heightValueinMeter, 2);
    document.querySelector("#value").innerText = bmi;
  } else if (selectedUnitIndex === 1) {
    const bmi = (weightValue / Math.pow(heightValueinMeter, 2)) * 703;
    document.querySelector("#value").innerText = bmi;
  }
}
