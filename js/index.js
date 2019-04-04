var values = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"); //array do alfabeto
        var chave = +document.getElementById("chave").innerHTML; //captura a chave do input com id chave

       

        var chave = parseInt(document.getElementById('chave').value)
        

        function criptografar() {
                var palavra = document.getElementById("palavra").value.toUpperCase();
                var result = "";
                var chave = parseInt(document.getElementById('chave').value)

                for(var i = 0; i<palavra.length; i++){ //for para ler todos caracteres da palavra digitada de acordo com o tamanho da palavra

                    var posicaoDaLetraNoAlfabeto = palavra.charCodeAt(i)-64; //usa formula baseada na tabela asc para descobir o caractere digitado
                    var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + chave) % 26; //aplica o deslocamento da cifra de césar
                    letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; 
                    result += values[letraComDeslocamento-1]; //-1 porque a primeira letra(A) esta na posição 0 do vetor
                }

                document.getElementById("saidaCrip").innerHTML = result; //saida da palavra criptografada
            }

            function descriptografar() {
                var palavra = document.getElementById("palavra").value.toUpperCase();
                var result = "";
                var chave = parseInt(document.getElementById('chave').value)

                for(var i = 0; i<palavra.length; i++){ 

                    var posicaoDaLetraNoAlfabeto = palavra.charCodeAt(i)-64;
                    var letraComDeslocamento = (posicaoDaLetraNoAlfabeto - chave) % 26;
                    letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; 
                    result += values[letraComDeslocamento-1]; 
                }

                document.getElementById("saidaDescrip").innerHTML = result;
            }