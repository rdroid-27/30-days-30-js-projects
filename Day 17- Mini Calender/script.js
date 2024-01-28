const date = document.querySelector("#date");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const today = new Date();
console.log(today);

date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = today.getday();
year.innerHTML = today.getyear();
month.innerHTML = today.getmonth();
