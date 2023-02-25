const imagens = document.querySelectorAll(".slide")
const setaVoltar = document.getElementById("seta-voltar")
const setaAvancar = document.getElementById("seta-avancar")

let imagemAtual = 0;

setaAvancar.addEventListener("click", function (){

    if(imagemAtual === imagens.length - 1) {
        return;
    }

    imagemAtual++

    esconderImagemAberta()
    // imagens[imagemAtual].classList.add("mostrar")
    mostrarImagem();
    mostrarOuEsconderSetas()
})

setaVoltar.addEventListener("click", function (){
    if(imagemAtual === 0){
        return
    }

    imagemAtual--

    esconderImagemAberta()
    mostrarImagem();
    mostrarOuEsconderSetas()
})

function mostrarImagem() {
    imagens[imagemAtual].classList.add("mostrar");
}

function mostrarImagem() {
    imagens[imagemAtual].classList.add("mostrar");
}

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".mostrar")
    imagemAberta.classList.remove("mostrar")
}

function mostrarOuEsconderSetas() {
    const naoEAprimeiraImagem = imagemAtual !== 0;
    if(naoEAprimeiraImagem){
        setaVoltar.classList.remove("opacidade");
    }else{
        setaAvancar.classList.add("opacidade")
    }

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
    if(chegouNaUltimaImagem){
        setaAvancar.classList.add("opacidade")
    }else{
        setaVoltar.classList.remove("opacidade")
    }
}
