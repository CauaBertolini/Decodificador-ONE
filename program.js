const textArea = document.querySelector("#texto");
const mensagem = document.querySelector("#resposta");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

//let matrizCodificador = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
//console.table(matrizCodificador);

function btnCopiar() {
    let textCopy = mensagem.value;
    navigator.clipboard.writeText(textCopy);
    const textButton = document.getElementById("copiar").textContent = "Copiado!";
    setInterval (function() {
        const textButton = document.getElementById("copiar").textContent = "Copiar";
    }, 3000
);


}

function btnCriptografar() {
    const textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    console.log(textoEncriptado);
}

function btnDesencriptografar() {
    const textoDescriptado = desincriptografar(textArea.value);
    mensagem.value = textoDescriptado;
    textArea.value = "";
    console.log(textoDescriptado);
}

function criptografar (stringEncriptada) {
    let matrizCodificador = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodificador.length; i++) {
        
        if(stringEncriptada.includes(matrizCodificador[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodificador[i][0], matrizCodificador[i][1]);
        }         
    }
    return stringEncriptada;
}

function desincriptografar (stringDesencriptada) {
    let matrizDescodificador = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizDescodificador.length; i++) {

        if(stringDesencriptada.includes(matrizDescodificador[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizDescodificador[i][1], matrizDescodificador[i][0]);
        }
    }
    return stringDesencriptada;
}

