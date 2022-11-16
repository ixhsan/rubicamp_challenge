const formID = document.getElementById('enable-id')
const formString = document.getElementById('enable-string')
const formInteger = document.getElementById('enable-integer')
const formFloat = document.getElementById('enable-float')
const formDate = document.getElementById('enable-date')
const formBoolean = document.getElementById('enable-boolean')

formID.addEventListener('change', disableOnCheck)
formString.addEventListener('change', disableOnCheck)
formInteger.addEventListener('change', disableOnCheck)
formFloat.addEventListener('change', disableOnCheck)
formDate.addEventListener('change', disableOnCheck)
formBoolean.addEventListener('change', disableOnCheck)
formDate.addEventListener('change', function () {
  if (this.checked) {
    document.getElementById(('input-date2'.disabled = false))
  } else {
    document.getElementById(('input-date2'.disabled = true))
  }
})

function disableOnCheck() {
  const labelID = document.querySelector(`label[${this.id}]`)
  const inputID = document.querySelector(`input[${this.id}]`)
  if (this.checked) {
    inputID.disabled = false
    labelID.style.color = '#000000'
    inputID.required = true
  } else {
    inputID.disabled = true
    inputID.value = ''
    labelID.style.color = '#c2c2c2'
  }
}

/* INDEX PAGE INPUT */
const indexID = document.getElementById('input-id')
const indexString = document.getElementById('input-string')
const indexInteger = document.getElementById('input-integer')
const indexFloat = document.getElementById('input-float')
const indexDate = document.getElementById('input-date')
const indexBoolean = document.getElementById('input-boolean')
const indexSearch = document.getElementById('search-button')

/* CHECK FOR EMPTY INPUTS */

indexID.addEventListener('input', validate)
indexString.addEventListener('input', validate)
indexInteger.addEventListener('input', validate)
indexFloat.addEventListener('input', validate)
indexDate.addEventListener('input', validate)
indexBoolean.addEventListener('input', validate)
// indexSearch.addEventListener("click", test)

function validate() {
  const userInput = [
    indexID.value,
    indexString.value,
    indexInteger.value,
    indexFloat.value,
    indexDate.value,
    indexBoolean.value,
  ]

  if (userInput.filter((item) => item.length > 0).length) {
    indexSearch.disabled = false
  } else {
    indexSearch.disabled = true
  }
}

