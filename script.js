let botao = document.querySelector(".principal__botao");

botao.addEventListener("click", (event) => {
    event.preventDefault();

    let campo = document.querySelector(".principal__campo");
    let linkDigitado = campo.value;

    let tagIMG = `<img src="${linkDigitado}" class="principal__imagem">`;

    let novaTagP = document.createElement("p");

    novaTagP.innerHTML= tagIMG;

    let divisao = document.querySelector(".principal");

    divisao.appendChild(novaTagP);

})