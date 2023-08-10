import dados from "../dados.js";

const tabela1 = document.querySelector(".tabela-1");

function CriaGridTabela(quantidade, classe, tabela) {
    for(let i=0;i<quantidade;i++) {
        let elemento = document.createElement("div")
        elemento.className = classe
        elemento.addEventListener("click", () => {
            alert("alo")
        })
        tabela1.appendChild(elemento)
    }
}

CriaGridTabela(90, 'elemento primeira-tabela', tabela1)
