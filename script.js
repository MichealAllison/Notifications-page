// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector(".mark-all").addEventListener("click", function () {
//     // Hide the notification count
//     document.querySelector(".notification-count").style.display = "none";

//     // Select all notification elements
//     const notifications = document.querySelectorAll(".notification");

//     // Loop through each notification element and apply changes
//     notifications.forEach(function (notification) {
//       // Change background color
//       notification.style.backgroundColor = "hsl(0, 0%, 100%)";

//       // Hide the notification dot
//       notification.querySelector(".notification-dot").style.display = "none";
//     });
//   });

//   document
//     .querySelector(".notification")
//     .addEventListener("click", function () {
//       document.querySelector(".notification").style.backgroundColor =
//         "hsl(0, 0%, 100%)";

//       const notification = document.querySelectorAll(".notification");

//       notification.forEach(function (notification) {
//         notification.style.backgroundColor = "hsl(0, 0%, 100%)";
//         notification.querySelector(".notification-dot").style.display = "none";
//       });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
  // Select all notification elements
  const notifications = document.querySelectorAll(".notification");

  // Add event listener to each notification
  notifications.forEach(function (notification) {
    notification.addEventListener("click", function () {
      // Change background color
      this.style.backgroundColor = "hsl(0, 0%, 100%)";

      // Hide the notification dot
      this.querySelector(".notification-dot").style.display = "none";

      // Decrement the notification count
      const notificationCount = document.querySelector(".notification-count");
      notificationCount.textContent =
        parseInt(notificationCount.textContent) - 1;
    });
  });

  // Add event listener to mark all button
  document.querySelector(".mark-all").addEventListener("click", function () {
    // Hide the notification count
    document.querySelector(".notification-count").style.display = "none";

    // Loop through each notification element and apply changes
    notifications.forEach(function (notification) {
      // Change background color
      notification.style.backgroundColor = "hsl(0, 0%, 100%)";

      // Hide the notification dot
      notification.querySelector(".notification-dot").style.display = "none";
    });
  });
});
