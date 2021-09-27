const clockTitle = document.querySelector("body");
const dDay = new Date("2021-12-25T00:00:00+0900");

function countDDay() {
  const now = new Date();
  const distance = dDay.getTime() - now.getTime();
  const gapDays = Math.floor(distance / (1000 * 60 * 60 * 24));
  const gapHours = String(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const gapMinutes = String(
    Math.floor(
      ((distance % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60)
    )
  ).padStart(2, "0");
  const gapSeconds = String(
    Math.floor(
      (((distance % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) % (1000 * 60)) /
        1000
    )
  ).padStart(2, "0");

  clockTitle.innerText = `${gapDays}d ${gapHours}h ${gapMinutes}m ${gapSeconds}s`;
}

countDDay();
setInterval(countDDay, 1000);
