const inputEdad = document.querySelector("#edad")
const helpEdad = document.querySelector(".help")
const controlEdad = document.querySelector("#control-edad")

inputEdad.oninput = () => {
  if (inputEdad.value < 9 || inputEdad.value > 99) {
    inputEdad.classList.add("is-danger")
    helpEdad.classList.remove("is-hidden")
    helpEdad.classList.add("is-danger")

    // no funciona el icono :(
      // la que descubre el arreglo tiene premio
    controlEdad.classList.add("has-icons-right")
    const span = document.createElement("span")
    span.classList.add("icon")
    span.innerHTML = `<i class="fas fa-biohazard"></i>`
    controlEdad.appendChild(span)
  }
}

const inputUsername = document.querySelector("#username")
const helpUsername = document.querySelector("#help-username")

inputUsername.oninput = () => {
  if (inputUsername.value === "zoe") {
    inputUsername.classList.add("is-success")
    helpUsername.classList.remove("is-hidden")
  }
}
