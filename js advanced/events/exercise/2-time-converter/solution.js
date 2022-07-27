function attachEventsListeners() {
  buttons = Array.from(document.querySelectorAll('input[type="button"]'));

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const days = document.getElementById("days").value;
      const hours = document.getElementById("hours").value;
      const minutes = document.getElementById("minutes").value;
      const seconds = document.getElementById("seconds").value;

      console.log("clicked");
      console.log(days);
      if (days != "") {
        document.getElementById("hours").value = Number(days) * 24;
        document.getElementById("minutes").value = Number(days) * 1440;
        document.getElementById("seconds").value = Number(days) * 86400;
      } else if (hours != "") {
        document.getElementById("days").value = Number(hours) / 24;
        document.getElementById("minutes").value = Number(hours) * 60;
        document.getElementById("seconds").value = Number(hours) * 3600;
      } else if (minutes != "") {
        document.getElementById("days").value = Number(minutes) / 1440;
        document.getElementById("hours").value = Number(minutes) / 60;
        document.getElementById("seconds").value = Number(minutes) * 60;
      } else if (seconds != "") {
        document.getElementById("days").value = Number(seconds) / 86400;
        document.getElementById("hours").value = Number(seconds) / 3600;
        document.getElementById("minutes").value = Number(seconds) / 60;
      }
    });
  });
}
