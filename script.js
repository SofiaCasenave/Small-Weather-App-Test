function updateDateTime() {
  let dateContainer = document.querySelector("#current-date-time");

  let currentTime = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[currentTime.getDay()];

  let date = currentTime.getDate();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let month = months[currentTime.getMonth()];

  let currentYear = currentTime.getFullYear();

  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  dateContainer.innerHTML = `${day}, ${date} ${month} ${currentYear} | ${hours}:${minutes} |`;
}
updateDateTime();
