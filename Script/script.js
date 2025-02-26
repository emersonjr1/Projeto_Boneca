//Transformei os ID em Var 
var frase = document.getElementById("txtEscolha");
var jogador = document.getElementById("jogador");
var pc = document.getElementById("pc");
var botao = document.getElementById("btn-recomecar");
var areaEscolha = document.getElementById("imagensJogo");
var areaResultado = document.getElementById("area-resultado");
// Pegando a referência da imagem corretamente
var imgBoneca = document.getElementById("imgBnc");

//ARRAY - Estrutura de dados sequencial Imagens que usamos no projeto
var imagens_jogador = ["../imagens/pedra_100.png", "../imagens/papel_100.png", "../imagens/tesoura_100.png"];
var imagens_pc = ["../imagens/pedra_100.png", "../imagens/papel_100.png", "../imagens/tesoura_100.png"];

//INDICE para saber onde estamos 
var index = 0;

//funçao para efeito imagens
function efeitoImagem() {
    jogador.src = imagens_jogador[index];
    pc.src = imagens_pc[index];

    //para ficar rodando o papel e tesoura
    index++;
    if (index === 3) {
        index = 0;
    }
}

//efeito de imagem ficar rodando (looop)
var efeito = setInterval(efeitoImagem, 100);

//funcao principal da funçao
function select(escolhaJogador) {
    //Esconder area de opçoes.
    areaEscolha.style.display = "none";
    areaResultado.style.display = 'block';

    //Começar contador
    txtEscolha.textContent = '3';

    //Ativar cronometro
    var tempo = setInterval(() => {
        var cronometro = parseInt(txtEscolha.textContent);
        cronometro--;
        txtEscolha.textContent = cronometro;

        if (cronometro === 0) {
            clearInterval(tempo);
            clearInterval(efeito);
        }
    }, 1000);

    //Regras do jogo
    setTimeout(() => {
        var escolhaPc = Math.floor(Math.random() * 3);
        console.log("Escolha do PC: " + escolhaPc);

        pc.src = imagens_pc[escolhaPc];
        jogador.src = imagens_jogador[escolhaJogador];

        if (escolhaJogador === escolhaPc) {
            frase.textContent = "Empate tente novamente!";
            botao.style.display = "block";
            return;
        }

        if (
            (escolhaJogador === 0 && escolhaPc === 2) ||
            (escolhaJogador === 1 && escolhaPc === 0) ||
            (escolhaJogador === 2 && escolhaPc === 1)
        ) {
            frase.textContent = "Jogador 1 venceu. Fique vivo!";
        } else {
            frase.textContent = "Jogador 2 venceu. Morra!";
            function aparecerBnc() {
                setTimeout(() => {
                    imgBoneca.style.display = "block";
                    imgBoneca.style.opacity = "1";
                }, 500);
            }

            aparecerBnc(); // Chama a função quando o jogador 2 vencer
            console.log(aparecerBnc);
        }

        botao.style.display = "block";
    }, 3000);
}