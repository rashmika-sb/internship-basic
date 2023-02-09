let select_month = document.getElementById("select_month");
let select_year = document.getElementById("select_year");
let btn_prev = document.getElementById("prev_month");
let btn_next = document.getElementById("next_month");
let btn_curr = document.getElementById("curr_month");
let calendar_dates = document.getElementById("dates");
let today = new Date();
// console.log(today);
let bgImgs = [
  5499133, 5499135, 5499138, 5498355, 5499139, 5498340, 5498347, 5498348,
  5490091, 5490092, 5491070, 5499127,
];

// arrow function
let bgImg = (index) =>
  `https://images.pexels.com/photos/${bgImgs[index]}/pexels-photo-${bgImgs[index]}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;

// set current month and year
select_year.value = today.getFullYear();
select_month.value = today.getMonth();
generateDates();

// event listeners
select_month.addEventListener("change", generateDates);
select_year.addEventListener("change", generateDates);
btn_prev.addEventListener("click", () => {
  console.log("ok");
  switchMonth(-1);
});
btn_next.addEventListener("click", () => {
  switchMonth(1);
});
btn_curr.addEventListener("click", () => {
  switchMonth(0);
});

// navigate months
function switchMonth(dir) {
  if (dir == 0) {
    select_year.value = today.getFullYear();
    select_month.value = today.getMonth();
  } else {
    let current_date = new Date(select_year.value, select_month.value, 1);
    let new_date = new Date(
      current_date.setMonth(current_date.getMonth() + dir)
    );
    select_year.value = new_date.getFullYear();
    select_month.value = new_date.getMonth();
  }
  generateDates();
}

//generate dates

function generateDates() {
  calendar_dates.innerHTML = "";

  let month = select_month.value;
  let year = select_year.value;

  document.body.style.backgroundImage = `url('${bgImg(month)}')`;

  let first_day_month = new Date(year, month++, 1).getDay();
  let total_days_month = new Date(year, month++, 0).getDate();

  for (i = 0; i < first_day_month; i++) {
    calendar_dates.append(el("div"));
  }

  for (i = 0; i < total_days_month; i++) {
    let cell = el("div", i + 1);
    cell.classList.add("date");
    if (
      today.getMonth() == month &&
      today.getFullYear() == year &&
      today.getDate() == i + 1
    ) {
      cell.classList.add("today");
    }
    calendar_dates.append(cell);
  }

  let rest_cells = 7 - ((total_days_month + first_day_month) % 7);
  if (rest_cells < 7) {
    for (i = 0; i < rest_cells; i++) {
      calendar_dates.append(el("div"));
    }
  }
}

function el(element, content = "") {
  let el = document.createElement(element);
  el.innerHTML = content;
  return el;
}
