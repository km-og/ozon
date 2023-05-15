import {
  progressInputValue,
  progressBtnAnimate,
  progressBtnHide,
} from "../utils/constants.js";
import {
  handleChangeValue,
  handleChangeAnimate,
  handleChangeVisibility,
} from "../utils/utils.js";

// слушатель изменения прогресса
progressInputValue.addEventListener("input", (evt) => {
  handleChangeValue(evt);
});

// слушатель переключения анимации
progressBtnAnimate.addEventListener("click", handleChangeAnimate);

// слушатель изменения видимости
progressBtnHide.addEventListener("click", handleChangeVisibility);
