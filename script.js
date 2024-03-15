document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".mark-all").addEventListener("click", function () {
    document.querySelector(".notification-count").style.display = "none";

    document.querySelector(".notification").style.backgroundColor =
      "hsl(0, 0%, 100%)";

    document.querySelector(".notification-dot").style.display = "none";
  });

  //   documentElement
  //     .querySelector(".notification")
  //     .addEventListener("click", function () {
  //       document.querySelector(".notification-dot").style.display = "none";
  //       document.querySelector(".notification").style.backgroundColor =
  //         "hsl(0, 0%, 100%)";
  //     });
});
