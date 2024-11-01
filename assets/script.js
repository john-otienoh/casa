$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
});

const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

const dueDate = new Date('Nov 17, 2024 00:00:00').getTime();
const days = document.getElementById('days');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');
const seconds = document.getElementById('seconds');

const interval = setInterval(() => {
  const now = new Date().getTime();
  const duration = dueDate - now;

  if (duration < 0) {
    clearInterval(interval);
    updateDuration(0);
    return;
  }
  updateDuration(duration)
}, 1000);

function updateDuration(duration) {
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((duration % (1000 * 60)) / (1000));

  days.innerHTML = days;
  hours.innerHTML = hours;
  minutes.innerHTML = minutes;
  seconds.innerHTML = seconds;
}