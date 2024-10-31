function updateTime() {
    const clock = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let period = 'AM';

    // Convert 24-hour time to 12-hour time with AM/PM
    if (hours >= 12) {
      period = 'PM';
      if (hours > 12) {
        hours -= 12;
      }
    } else if (hours === 0) {
      hours = 12;
    }

    hours = String(hours).padStart(2, '0');

    // Display the time with AM/PM
    clock.textContent = `${hours}:${minutes}:${seconds} ${period}`;
  }

  setInterval(updateTime, 1000);  // Update every second
  updateTime();  // Initial call to set the time immediately