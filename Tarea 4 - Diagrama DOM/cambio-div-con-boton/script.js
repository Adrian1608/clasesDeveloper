const modifierButton = document.getElementById("modifierButton");
const modifiableDiv = document.getElementById("modifiableDiv");

modifierButton.addEventListener("mousedown", () => {
    modifiableDiv.style.backgroundColor = 'grey';
});

modifierButton.addEventListener("mouseup", () => {
    modifiableDiv.style.backgroundColor = 'white'
});