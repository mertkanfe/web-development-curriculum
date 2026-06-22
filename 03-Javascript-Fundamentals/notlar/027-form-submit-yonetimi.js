// FORM
// Form ve Form Submit Yönetimi #27

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault() // default islemi engelledik...
    console.log("islem gerceklesti")
}