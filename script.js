document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".mark-all").addEventListener("click", function () {
    // Hide the notification count
    document.querySelector(".notification-count").style.display = "none";

    // Select all notification elements
    const notifications = document.querySelectorAll(".notification");

    // Loop through each notification element and apply changes
    notifications.forEach(function (notification) {
      // Change background color
      notification.style.backgroundColor = "hsl(0, 0%, 100%)";

      // Hide the notification dot
      notification.querySelector(".notification-dot").style.display = "none";
    });
  });
});
