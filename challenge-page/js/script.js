const modal = document.querySelector('.modal-container')
window.idBotaoClicado = 0;
let myIframe = document.getElementById("myIframe");
let url_string = "https://blog.rocketseat.com.br/";

function openModal(e) {
    window.idBotaoClicado = e
    if (idBotaoClicado === "button1") {
        let adsURL = url_string + "boas-praticas-para-devs-em-inicio-de-carreira/";
        myIframe.src = adsURL;
        modal.classList.add('active')
    } else if (idBotaoClicado === "button2") {
        let adsURL = url_string + "codigo-livre/";
        myIframe.src = adsURL;
        modal.classList.add('active')
    } else if (idBotaoClicado === "button3") {
        let adsURL = url_string + "dark-mode-com-css-mudando-a-aparencia-do-blog-de-maneira-simples-e-rapida/";
        myIframe.src = adsURL;
        modal.classList.add('active')
    }
}

function closeModal() {
    modal.classList.remove('active')
    myIframe.src = '';
    document.getElementsByClassName("modal")[0].style.width = '50%'
}

function maximizarModal() {
    if (document.getElementsByClassName("modal")[0].style.width === '100%') {
        document.getElementsByClassName("modal")[0].style.width = '50%'
    } else {
        document.getElementsByClassName("modal")[0].style.width = '100%'
    }
}