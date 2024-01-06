const signIcons = document.querySelectorAll(".sign-icon");
const hiddenTextElements = document.querySelectorAll(".text");
signIcons.forEach(
    (icon,index) => {
        icon.addEventListener("click", () => {
            hiddenTextElements[index].classList.remove("hidden");
            icon.src = "assets/images/icon-plus.svg";
        });
    }
);