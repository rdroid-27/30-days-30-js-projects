// today's date
const today = new Date();
let day = today.getDay();
let month = today.getMonth() + 1;
let year = today.getFullYear();

// set max date of today
document.querySelector("#date").max = today.toISOString().split("T")[0];

// onclick function
function calculate() {
  let bArr = document.querySelector("#date").value.split("-");

  let bDay = Number(bArr[2]);
  let bMonth = Number(bArr[1]);
  let bYear = Number(bArr[0]);

  let resDay, resMonth, resYear;

  resYear = year - bYear;
  if (month >= bMonth) {
    resMonth = month - bMonth;
  } else {
    resYear--;
    resMonth = 12 + month - bMonth;
  }

  if (day >= bDay) {
    resDay = day - bDay;
  } else {
    resMonth--;
    resDay = daysInMonth(bYear, bMonth) + day - bDay;
  }

  if (resMonth < 0) {
    resMonth = 11;
    resYear--;
  }

  const text = document.querySelector("#result");
  if (resYear == 0) {
    if (resMonth == 0) {
      text.innerHTML = `You are just <span class="age">${resDay}</span> Days old.`;
    } else {
      text.innerHTML = `You are <span class="age">${resMonth}</span> Months and <span class="age">${resDay}</span> Days old.`;
    }
  } else {
    text.innerHTML = `You are <span class="age">${resYear}</span> Years,<span class="age">${resMonth}</span> Months and <span class="age">${resDay}</span> Days
    old.`;
  }
  text.style.display = "block";
}

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
