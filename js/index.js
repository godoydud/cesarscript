let values = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"); //array do alfabeto

let chave = +document.getElementById("chave").innerHTML; //captura a chave do input com id chave


function criptografar() {

    let palavra = document.getElementById("palavra").value.toUpperCase();
    let chave = parseInt(document.getElementById('chave').value)

    let result = "";
    for (let i = 0; i < palavra.length; i++) { // for para passar todos caracteres da string palavra

        let posicaoDaLetraNoAlfabeto = values.indexOf(palavra.charAt(i)); //indexOf --> pega a posição de um elemento no array e 
                                                                        //a posição é --> palavra.charAt(i)

        // aplicando deslocamento (criptografia)
        let letraComDeslocamento = (posicaoDaLetraNoAlfabeto + chave) % 26;
        letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento;

        // pega o valor da letra deslocada 
        result += values[letraComDeslocamento]; 
    }

    document.getElementById("saidaCrip").innerHTML = result; //saida da palavra criptografada
}

function descriptografar() {

    let palavra = document.getElementById("palavra").value.toUpperCase();         
    let chave = parseInt(document.getElementById('chave').value)
    
    let result = "";

    for (let i = 0; i < palavra.length; i++) { // for para todos caracteres da palavra

        let posicaoDaLetraNoAlfabeto = values.indexOf(palavra.charAt(i));

        // desloca a letra para tras (descriptografia)
        var letraComDeslocamento = (posicaoDaLetraNoAlfabeto - chave) % 26;

        /**
         * se a letra for menor que 0 (pois estamos deslocando para tras 
         * é preciso somar o numero negativo com 26)
         */
        letraComDeslocamento = letraComDeslocamento < 0 ? 26 + letraComDeslocamento : letraComDeslocamento;

        result += values[letraComDeslocamento];
    }

    document.getElementById("saidaDescrip").innerHTML = result; // saida da palavra descriptografada
}

  