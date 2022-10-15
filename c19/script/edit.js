// // const fillForm = document.getElementById("fill-form")
// const formID = document.getElementById("enable-id")
// const formString = document.getElementById("enable-string")
// const formInteger = document.getElementById("enable-integer")
// const formFloat = document.getElementById("enable-float")
// const formDate = document.getElementById("enable-date")
// const formBoolean = document.getElementById("enable-boolean")

// formID.addEventListener("change", disableOnCheck)
// formString.addEventListener("change", disableOnCheck)
// formInteger.addEventListener("change", disableOnCheck)
// formFloat.addEventListener("change", disableOnCheck)
// formDate.addEventListener("change", disableOnCheck)
// formBoolean.addEventListener("change", disableOnCheck)

// function disableOnCheck() {
//     const labelID = document.querySelector(`label[${this.id}]`)
//     const inputID = document.querySelector(`input[${this.id}]`)
//     if (this.checked) {
//         inputID.disabled = false
//         labelID.style.color = "#000000"
//     } else {
//         inputID.disabled = true
//         inputID.value = ''
//         labelID.style.color = "#c2c2c2"
//     }
// }