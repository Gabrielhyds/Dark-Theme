// CRIAÇÃO DE VARIAVEL QUE PEGA O ID "CHK"
const chk = document.getElementById("chk")

//FUNÇÃO QUE MUDA O TEMA QUANDO O BOTÃO FOR CLICADO
chk.addEventListener('change', () =>{
    document.body.classList.toggle("dark")
})