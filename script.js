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
const inotificacao = document.getElementById("notificacao")

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
    mudarStatus("Alerta exibido")
        contarClique()
})
// Confirm
iconfirm.addEventListener("click", function(){
    const resposta = confirm("Deseja continuar?")
    if(resposta){
        alert("Você escolheu continuar!")
        mudarStatus("Usuário escolheu continuar")
    } else {
        alert("Você escolheu cancelar!")
        mudarStatus("Usuário escolheu cancelar")
    }
        contarClique()
})
// Prompt
iprompt.addEventListener("click", function(){
    const nome = prompt("Digite seu nome?")
    if(nome){
        alert("olá " + nome)
        mudarStatus("Usuário digitou o nome: " + nome)
    }
        contarClique()
})
// Console
iconsole.addEventListener("click", function(){
    console.log("Bem-vindo ao projeto!")
    mudarStatus("Mensagem exibida no console")
        contarClique()
})
//--------------------------------------------------------
// DOM + Eventos-----------------------------------------

// Mostrar nome
imostrar.addEventListener("click", function(){
    const nome = iname.value
    alert("olá " + nome)
    iname.value = ""
    mudarStatus("Usuário digitou o nome: " + nome)
        contarClique()
})

// mudar o titulo
imudar.addEventListener("click", function(){
    document.querySelector("h1").innerText = "Título Alterado!"
    mudarStatus("Título da página alterado")
        contarClique()
})

// trocar o tema
itrocar.addEventListener("click", function(){
    document.body.classList.toggle("light")
    if (document.body.classList.contains("light")){
        mudarStatus("Tema claro ativado")
        contarClique()
    } else {
        mudarStatus("Tema escuro ativado")
        contarClique()
    }
})

// somar dois números
isomar.addEventListener("click", function(){
    const num1 = parseFloat(prompt("Digite o primeiro número:"))
    const num2 = parseFloat(prompt("Digite o segundo número:"))
    const soma = num1 + num2
    alert("Resultado: " + soma)
    mudarStatus("Usuário somou " + num1 + " + " + num2 + " = " + soma)
        contarClique()
})

//--------------------------------------------------------
// Mouse
imouse.addEventListener("mouseenter", function(){
    inotificacao.style.display = "block"
    
    setTimeout(function(){
        inotificacao.style.opacity = "1"
    }, 10)

    inotificacao.innerText = "Mouse entrou na caixa!"
})

imouse.addEventListener("mouseleave", function(){
    inotificacao.style.opacity = "0"

    setTimeout(function(){
        inotificacao.style.display = "none"
    }, 300)
})