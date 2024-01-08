const signIcons = document.querySelectorAll(".sign-icon");
const hiddenTextElements = document.querySelectorAll(".text");
//implementing hiding and colapsing behaviour when user clicks on icon
signIcons.forEach(
    (icon, index) => {
        icon.addEventListener("click", () => {
            if (!icon.classList.contains("plus")) {
                hiddenTextElements[index].classList.remove("hidden");
                icon.src = "assets/images/icon-plus.svg";
                icon.classList.add("plus");
                removeCollapse(index);
            }else{
                icon.src = "assets/images/icon-minus.svg";
                icon.classList.remove("plus")
                hiddenTextElements[index].classList.add("hidden");
            }
        });
    }
);
//hiding other blocks when one block is already collapsed
function removeCollapse(index){
    hiddenTextElements.forEach(
        (hiddenTextElement,elementIndex)=>{
            if(!hiddenTextElement.classList.contains("hidden") &&  index !== elementIndex){
                hiddenTextElement.classList.add("hidden");
                signIcons.forEach((icon)=>{
                    icon.classList.remove("plus");
                    icon.src = "assets/images/icon-minus.svg";
                });
            }
        }
    )
};