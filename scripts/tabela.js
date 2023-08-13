import dados from "../dados.js";

const tabela1 = document.querySelector(".tabela-1");
const tabela2 = document.querySelector(".tabela-2");

CriaGridTabela(90, 'elemento', tabela1)
CriaGridTabela(15, 'elemento', tabela2)
CriaGridTabela(15, 'elemento', tabela2)


// Para o offset (4º parametro, subtrair a posição inicial da posição do elemento desejado)
PopulaDadosTabela(0, 57, tabela1)
PopulaDadosTabela(57, 18, tabela1, 14)
PopulaDadosTabela(75, 15, tabela1, 28)

PopulaDadosTabela(0, 15, tabela2, 56)
PopulaDadosTabela(15, 15, tabela2, 73)





function CriaGridTabela(quantidade, classe, tabela) {
    for(let i=0;i<quantidade;i++) {
        let elemento = document.createElement("div")
        elemento.className = classe
        elemento.addEventListener("click", () => {
            alert("alo")
        })
        tabela.appendChild(elemento)
    }
}

function PopulaDadosTabela(inicio, quantidade, tabela, offset=0) {
    let area = tabela.querySelectorAll(".elemento")
    for (let i=0;i<quantidade;i++) {
        var posElementoAtual = i + offset + inicio
        var posGridAtual = i + inicio
        //Lantanídeos
        if (posGridAtual == 56) {
            area[i+inicio].innerHTML = `
            <p class="lantanideos">* 57-71</p>
            
            `
        }
        //actinideos
        else if (posGridAtual == 74){
            area[i+inicio].innerHTML = `
            <p class="actinideos">* 89-103</p>
            
            `
        }
        else {
            area[posGridAtual].innerHTML = `
            <div class="container-elemento ${dados[posElementoAtual].classificacao}">
                <p class="numAtomico">${dados[posElementoAtual].atomicNumber}</p>
                <p class="sigla">${dados[posElementoAtual].symbol}</p>
                <p class="nome">${dados[posElementoAtual].name}</p>
                <p class="massa">${dados[posElementoAtual].weight}</p>
            </div>   
            `
        }
    }
}
