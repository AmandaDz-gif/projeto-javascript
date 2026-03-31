// Interações básicas
const ialert = document.getElementById("ialert")
const iconfirm = document.getElementById("iconfirm")
const iprompt = document.getElementById("iprompt")
const iconsole = document.getElementById("iconsole")

// DOM + Eventos
const iname = document.getElementById("iname")
const imostrar = document.getElementById("imostrar")
const imudar = document.getElementById("imudar")
const itrocar = document.getElementById("itrocar")
const isomar = document.getElementById("isomar")

// Status
const istatus = document.getElementById("istatus")
const iclique = document.getElementById("iclique")
const ihoras = document.getElementById("ihoras")

// Mouse
const imouse = document.getElementById("imouse")
const notificacao = document.getElementById("notificacao")

// Status-----------------------------------------------
function mudarStatus(mensagem){
    istatus.innerText = mensagem
}

let contador = 0
function contarClique(){
    contador++
    iclique.innerText = contador
}

function mostrarHora(){
    const agora = new Date()
    ihoras.innerText = agora.toLocaleTimeString()
}
setInterval(mostrarHora, 1000)
//--------------------------------------------------------
// Interações básicas-------------------------------------
// Alert
ialert.addEventListener("click", function(){
    alert("Bem-vindo ao projeto!")
})
// Confirm
iconfirm.addEventListener("click", function(){
    const resposta = confirm("Deseja continuar?")
    if(resposta){
        alert("Você escolheu continuar!")
    } else {
        alert("Você escolheu cancelar!")
    }
})
// Prompt
iprompt.addEventListener("click", function(){
    const nome = prompt("Digite seu nome?")
    if(nome){
        alert(`Olá, ${nome}!`)
    }
})
// Console
iconsole.addEventListener("click", function(){
    console.log("Bem-vindo ao projeto!")
})