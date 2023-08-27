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


DestacaLegenda()


function CriaGridTabela(quantidade, classe, tabela) {
    for(let i=0;i<quantidade;i++) {
        let elemento = document.createElement("div")
        elemento.className = classe
        elemento.addEventListener("click", (event) => {
            var numeroAtomico = event.target.parentNode.dataset.numatom
            if (!numeroAtomico) return;

            DadosdoElemento(numeroAtomico)
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
            <div class="container-elemento lantanideos">
                <p>* 57-71</p>
            </div>   
            
            `
        }
        //actinideos
        else if (posGridAtual == 74){
            area[i+inicio].innerHTML = `
            <div class="container-elemento actinideos">
                <p>* 89-103</p>
            </div>   
            `
        }
        else {
            area[posGridAtual].innerHTML = `
            <div class="container-elemento ${dados[posElementoAtual].classificacao} ${dados[posElementoAtual].classificacao}-container" data-numatom="${dados[posElementoAtual].atomicNumber}">
                <p class="numAtomico">${dados[posElementoAtual].atomicNumber}</p>
                <p class="sigla">${dados[posElementoAtual].symbol}</p>
                <p class="nome">${dados[posElementoAtual].name}</p>
                <p class="massa">${dados[posElementoAtual].weight}</p>
            </div>   
            `
        }
    }
}

function DadosdoElemento(numAtomico) {
    let dadosElemento = dados.find((obj) => obj.atomicNumber == numAtomico);
    let containerInfo = document.querySelector(".container-campos")

    containerInfo.querySelector("#info-nome").textContent = dadosElemento.name
    containerInfo.querySelector("#info-numatom").textContent = dadosElemento.atomicNumber
    containerInfo.querySelector("#info-massa").textContent = dadosElemento.weight
    containerInfo.querySelector("#info-familia").textContent = dadosElemento.familia
    containerInfo.querySelector("#info-periodo").textContent = dadosElemento.periodo
    containerInfo.querySelector("#info-pontoeb").textContent = dadosElemento.pontoEbulicao
    containerInfo.querySelector("#info-pontofus").textContent = dadosElemento.pontoFusao



}

function DestacaLegenda() {
    let legendas = document.querySelectorAll(".box-legenda > div")
    let legendaAtiva = null 

    legendas.forEach((legenda) => {
        legenda.addEventListener("click", () => {
            if (legendaAtiva?.id === legenda.id) {
                legendaAtiva = null
                LimpaSelecao()
                LimpaLegendasAtivas()
            } else {
                LimpaLegendasAtivas();
                legendaAtiva = legenda
                legenda.classList.add("ativo")
                AlteraVisubilidadeLegenda(legenda.id)
            }        
        })
    })
}

function AlteraVisubilidadeLegenda(tipoElemento) {
    document.querySelectorAll(".container-elemento").forEach((elemento) => {

        if (elemento.classList.contains(tipoElemento)) {
            elemento.classList.add("destaque")
            elemento.classList.remove("nao-destaque")

        } else {
            elemento.classList.remove("destaque")
            elemento.classList.add("nao-destaque")
        }
    })
}

function LimpaSelecao() {
    document.querySelectorAll(".container-elemento").forEach((elemento) => {
        elemento.classList.remove("destaque")
        elemento.classList.remove("nao-destaque")

    })
}

function LimpaLegendasAtivas() {
    let legendas = document.querySelectorAll(".box-legenda > div")
    legendas.forEach((legenda) => {
        legenda.classList.remove("ativo")
    })
}