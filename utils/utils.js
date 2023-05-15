import { progress, progressCircle, inputAnimated } from "./constants.js";

// изменение прогресса

function handleChangeValue(evt) {
  const degree = (evt.target.value / 100) * 360;
  progressCircle.style.background = `conic-gradient(#005bff ${degree}deg, #eff3f6 0deg)`;
}

// вкл/выкл анимации элементов

function handleChangeAnimate() {
  if (inputAnimated.checked) {
    document.addEventListener("click", (evt) => {
      evt.target.classList.toggle("progress_type_animated");
    });
  } else {
    const activeAnimations = document.querySelectorAll(
      ".progress_type_animated"
    );
    activeAnimations.forEach((item) => {
      item.classList.remove("progress_type_animated");
    });
  }
}

// изменение видимости блока

function handleChangeVisibility() {
  progress.classList.add("progress_type_hidden");
}

export { handleChangeValue, handleChangeAnimate, handleChangeVisibility };
