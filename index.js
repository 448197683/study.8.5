const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    console.log(e);
  });
});