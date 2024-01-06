const signIcons = document.querySelectorAll(".sign-icon");
const hiddenTextElements = document.querySelectorAll(".text");
signIcons.forEach(
    (icon, index) => {
        icon.addEventListener("click", () => {
            if (!icon.classList.contains("plus")) {
                hiddenTextElements[index].classList.remove("hidden");
                icon.src = "assets/images/icon-plus.svg";
                icon.classList.add("plus");
            }else{
                icon.src = "assets/images/icon-minus.svg";
                icon.classList.remove("plus")
                hiddenTextElements[index].classList.add("hidden");
            }
        });
    }
);