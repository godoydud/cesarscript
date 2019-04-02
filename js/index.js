var values = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
        var chave = +document.getElementById("chave").innerHTML;

        function aumentarChave() {
                if(chave > 1) {
                    chave--;
                    document.getElementById("chave").innerHTML = chave;
                }
            }

            function diminuirChave() {
                if(chave < 25) {
                    chave++;
                    document.getElementById("chave").innerHTML = chave;
                }
            }

        function criptografar() {
                var palavra = document.getElementById("palavra").value.toUpperCase();
                var result = "";

                for(var i = 0; i<palavra.length; i++){ //Passa por cada caracter do input

                    var posicaoDaLetraNoAlfabeto = palavra.charCodeAt(i)-64; //Identifica qual letra é do alfabeto
                    var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + chave) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
                    letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; //MOD retornar 0 caso o resultado seja 26, tem que tratar isso
                    result += values[letraComDeslocamento-1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.
                }

                document.getElementById("saidaCrip").innerHTML = result;
            }

            function descriptografar() {
                var palavra = document.getElementById("palavra").value.toUpperCase();
                var result = "";

                for(var i = 0; i<palavra.length; i++){ //Passa por cada caracter do input

                    var posicaoDaLetraNoAlfabeto = palavra.charCodeAt(i)-64; //Identifica qual letra é do alfabeto
                    var letraComDeslocamento = (posicaoDaLetraNoAlfabeto - chave) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
                    letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; //MOD retornar 0 caso o resultado seja 26, tem que tratar isso
                    result += values[letraComDeslocamento-1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.
                }

                document.getElementById("saidaDescrip").innerHTML = result;
            }