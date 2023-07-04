import inputFields from "./dateForm";
import { handleErrorStates, getValidDate, calculateAge } from "./functions";
import { DEFAULT_SPAN_TEXT } from './constants';
import './style.css'; 

const btn = document.getElementById("button");
document.getElementById("days_text").innerText = DEFAULT_SPAN_TEXT;
document.getElementById("months_text").innerText = DEFAULT_SPAN_TEXT; 
document.getElementById("years_text").innerText = DEFAULT_SPAN_TEXT;

const getInputValues = (e) => {
  const value = e.target.value;
  const inputName = e.target.id; 
  inputFields[inputName].value = value;
};

const onSubmit = () => {
  let clientDate;
  handleErrorStates(inputFields);
  const hasErrors = [inputFields.day.hasError, inputFields.month.hasError, inputFields.year.hasError]; 
  const someInputsHasError = hasErrors.some((element) => element);

  if(!someInputsHasError) {
    clientDate = getValidDate(inputFields);
    calculateAge(clientDate);
  }; 
}

inputFields.day.input.addEventListener("change", (e) => getInputValues(e));
inputFields.month.input.addEventListener("change", (e) => getInputValues(e));
inputFields.year.input.addEventListener("change", (e) => getInputValues(e));
btn.addEventListener("click", onSubmit);