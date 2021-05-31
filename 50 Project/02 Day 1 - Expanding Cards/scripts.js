const panels = document.querySelectorAll(".panel");
// console.log(panels[0]);

panels.forEach((abc) => {
    // console.log(abc);
    abc.addEventListener("click", () => {
        removeActiveClass();
        abc.classList.add("active");
    });
});

function removeActiveClass() {
    panels.forEach((xyz) => {
        xyz.classList.remove("active");
    });
}
