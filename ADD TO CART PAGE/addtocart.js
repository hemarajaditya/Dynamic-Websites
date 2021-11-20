let cartItemsTextInputE1 = document.getElementById("cartItemTextInput");
let cartItemsContainerE1 = document.getElementById("cartItemsContainer");

function onAddCartItem() {

    let cartItemText = cartItemsTextInputE1.value;

    let cartItemE1 = document.createElement("li");
    cartItemE1.textContent = cartItemText;

    cartItemsTextInputE1.value = "";
    cartItemsContainerE1.appendChild(cartItemE1);

}