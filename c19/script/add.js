const inputBoolean = document.getElementById("add-boolean")

inputBoolean.addEventListener("change", test)
inputBoolean.addEventListener("input", test2)

function test() {
    this.value.replace(1, 'True')
    console.log(this);
}

function test2() {
    this.value.replace(0, 'False')
    console.log(this);
}