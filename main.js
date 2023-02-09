const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
// const addActiveClass = (panel) => {
//   removeActiveClasses();
//   panel.classList.add("active");
// };

// panels.forEach((panel) => {
//   panel.addEventListener("click", addActiveClass(panel));
// });

// const removeActiveClasses = function () {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// };

// const removeActiveClasses = () => {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// };
