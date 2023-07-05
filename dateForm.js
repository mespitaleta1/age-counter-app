import { ERROR_MESSAGE, INVALID_INPUT } from "./constants"; 

function isInputEmpty (inputValue) {
  if(inputValue != "") {
    return {isEmpty: false, errorMessage: ""}
  }
  return {isEmpty: true, errorMessage: ERROR_MESSAGE.EMPTY_FIELDS}
};

function validateDay() {

  let dayValue = Number(this.value);
  const {isEmpty, errorMessage} = isInputEmpty(this.value);

  const correctDayRange = dayValue > INVALID_INPUT.VALUE && dayValue <= INVALID_INPUT.DAY;

  if(isEmpty){
    this.hasError = true;
    this.errorMessage = errorMessage;
  } else {
    
    if(correctDayRange){
      this.hasError = false;
      this.errorMessage = "";
    }
    
    if(!correctDayRange) {
      this.hasError = true;
      this.errorMessage = ERROR_MESSAGE.DAY;
    }
  }
};

function validateMonth(){
  const monthValue = Number(this.value)
  const {isEmpty, errorMessage} = isInputEmpty(this.value);
  const correctMonthRange =  monthValue > INVALID_INPUT.VALUE && monthValue <= INVALID_INPUT.MONTH;

  if(isEmpty){
    this.hasError = true;
    this.errorMessage = errorMessage;
  } else {
    if (correctMonthRange) {
      this.hasError = false;
      this.errorMessage = "";
    }
    
    if(!correctMonthRange){
      this.hasError = true;
      this.errorMessage = ERROR_MESSAGE.MONTH;
    }
  }
};

function validateYear() {
  const today = new Date(); 
  const yearValue = Number(this.value);
  const getCurrentYear = today.getFullYear();
  const {isEmpty, errorMessage} = isInputEmpty(this.value);
  const correctYearRange = yearValue > INVALID_INPUT.VALUE && yearValue <= getCurrentYear;

  if(isEmpty){
    this.hasError = true;
    this.errorMessage = errorMessage;
  } else {
    if(correctYearRange) {
      this.hasError= false;
      this.errorMessage = "";
    } 
    
    if(!correctYearRange){
      this.hasError = true;
      this.errorMessage = ERROR_MESSAGE.YEAR;
    }

    if(yearValue == INVALID_INPUT.VALUE) {
      this.hasError = true;
      this.errorMessage = ERROR_MESSAGE.VALID_YEAR;
    }
  }

};

const inputFields = {
    day: {
      value: "",
      input: document.getElementById("day"),
      label: document.getElementById("label-day"),
      span: document.getElementById("day-span"), 
      hasError:false,
      errorMessage: "",
      validate: validateDay,
    },
    month: {
      value: "",
      input: document.getElementById("month"),
      label: document.getElementById("label-month"),
      span: document.getElementById("month-span"),
      hasError:false,
      errorMessage: "",
      validate: validateMonth,
    },
    year: {
      value: "",
      input: document.getElementById("year"),
      label: document.getElementById("label-year"),
      span: document.getElementById("year-span"),
      hasError:false,
      errorMessage: "",
      validate: validateYear,
    },
};

export default inputFields; 