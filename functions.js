import { DAY, MONTH, YEAR, ERROR_MESSAGE, INVALID_INPUT } from "./constants";

export const getDaysInMonth = (yearValue, monthValue) => new Date(yearValue, monthValue, 0).getDate(); 

export const handleErrorStates = (inputsObj) => {
  inputsObj.day.validate();
  inputsObj.month.validate();
  inputsObj.year.validate();
 
  for (const key in inputsObj) {
    let field = inputsObj[key];
   if(field.hasError) {
     field.input.classList.add("error__state_warning");
     field.label.classList.add("error__state_title"); 
     field.span.classList.remove("hidden-span");
     field.span.classList.add("error__state_text");
     field.span.innerText = field.errorMessage;  
   } else {
     field.input.classList.remove("error__state_warning");
     field.label.classList.remove("error__state_title"); 
     field.span.classList.add("hidden-span");
     field.span.classList.remove("error__state_text");
     field.span.innerText = "";  
   }}
 };

export const getValidDate = (inputObj) => {
  const birthDate = new Date (`${inputObj.month.value}/${inputObj.day.value}/${inputObj.year.value}`);
  const getInputYear = birthDate.getFullYear();
  const validDate = getDaysInMonth(getInputYear, inputObj.month.value); 

  if(inputObj.day.value > validDate) {
    inputObj.day.span.innerText = ERROR_MESSAGE.VALID_DATE;
    for (const key in inputObj) {
      let field = inputObj[key]; 
      field.input.classList.add("error__state_warning");
      field.label.classList.add("error__state_title"); 
      field.span.classList.remove("hidden-span");
      field.span.classList.add("error__state_text");
    }
  } else {
    for (const key in inputObj) {
      let field = inputObj[key];  
      field.input.classList.remove("error__state_warning");
      field.label.classList.remove("error__state_title"); 
      field.span.classList.add("hidden-span");
      field.span.classList.remove("error__state_text");
    }
    return birthDate;
  }
};

export const calculateAge = (dateValue) => {
  const currentDay = new Date(); 
  const inputDate = dateValue;
  const age = currentDay - inputDate;

  let dayCounter = INVALID_INPUT.VALUE;
  let monthCounter = INVALID_INPUT.VALUE;
  let yearCounter = INVALID_INPUT.VALUE;

  const dayAgeText = document.getElementById("days_text");
  const monthAgeText = document.getElementById("months_text");
  const yearAgeText = document.getElementById("years_text");

  if(age) {
    const incrementDayAnimation = () => {
      dayCounter++;
      dayAgeText.innerText = dayCounter; 
      let days = Math.floor((age / 1000) / DAY);
      if(dayCounter == days) {
          clearInterval(animateDay);
      }
    };

    const incrementMonthAnimation = () => {
      monthCounter++;
      monthAgeText.innerText = monthCounter; 
      let months = Math.floor((age % YEAR) / MONTH);
      if(monthCounter == months) {
          clearInterval(animateMonth);
      } 
    };

    const incrementYearAnimation = () => {
    yearCounter++;
    yearAgeText.innerText = yearCounter; 
    let years = Math.floor(age / YEAR);
    if(yearCounter == years) {
        clearInterval(animateYear);
    }
    }

    const animateDay = setInterval(incrementDayAnimation, 40);
    const animateMonth = setInterval(incrementMonthAnimation, 40);
    const animateYear = setInterval(incrementYearAnimation, 40); 
  }
}