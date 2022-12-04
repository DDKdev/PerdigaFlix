let novaDiv = document.createElement('div');
let novaUL = document.createElement('ul');

let botao = document.querySelector(".principal__botao");

botao.addEventListener("click", (event) => {
    event.preventDefault();

    let campo = document.querySelector(".principal__campo");
    let linkDigitado = campo.value;

    let tagIMG = `<img src="${linkDigitado}" class="principal__imagem">`;

    let novaTagLi = document.createElement("li");
    novaTagLi.classList.add("lista__item");

    novaTagLi.innerHTML= tagIMG;

    let divPrincipal = document.querySelector(".principal");

    divPrincipal.appendChild(novaDiv);
    novaDiv.appendChild(novaUL);
    novaUL.classList.add("principal__lista")
    novaUL.appendChild(novaTagLi);

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    novaTagLi.appendChild(botaoRemover);

    botaoRemover.addEventListener("click", (event) => {
        event.target.parentNode.remove();

    })

})