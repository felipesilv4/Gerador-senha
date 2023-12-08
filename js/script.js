let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#conteiner-password")

let charset = "abcçdefghijklmnopqrstuvxywzABCDEFGHIJKLMOPQRSTUVXYWZ0123456789!@"
let novaSenha = ""


sizePassword.innerHTML = sliderElement.value
sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value
}
function generatepassword() {
    let pass = ""
   for(let i = 0, n = charset.length; i < sliderElement.value; i++){  //  o I começa em 0 e vai passar até o slider for menor (sliderElement.value é o valor que o usuario selecionou ) a variavel n é pra per a quantidade de valor 
   pass += charset.charAt(Math.floor(Math.random() * n))

    }

    containerPassword.classList.remove("hide")
    password.innerHTML = pass
    novaSenha = pass
}
function copypassword() {
    alert("Copiado com sucesso!")
    navigator.clipboard.writeText(novaSenha)
}