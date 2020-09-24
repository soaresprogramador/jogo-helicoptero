function start() {

    //Esconde a div de inicio
    $("#inicio").hide();

    //Insere as div's abaixo
    $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
    $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //Variável principal

    var jogo = {};
    var velocidade = 5;
    var posicaoY = parseInt(Math.random() * 334);
    var podeAtirar = true;
    var TECLA = {
        W:87,
        S:83,
        D:68
    }    
    
    jogo.pressionou = [];

    //Verificar a tecla pressionada
    $(document).keydown(function(e){
        jogo.pressionou[e.which] = true;
    });

    $(document).keyup(function(e){
        jogo.pressionou[e.which] = false;
    });

    //Loop

    jogo.timer = setInterval(loop, 25);

    function loop() {
        moveFundo();
        moveJogador();
        moveInimigo1();
        moveInimigo2();
        moveAmigo();
    }

    //movimento do fundo
    function moveFundo() {
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position", esquerda-1);
    }
    
    //movimento do jogador para cima e para baixo até os limites 
    function moveJogador() {
        if(jogo.pressionou[TECLA.W]){
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo-10);

            if(topo<=0){
                $("#jogador").css("top", topo+10);
            }
        }

        if(jogo.pressionou[TECLA.S]){
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo+10);
            
            if(topo>=434){
                $("#jogador").css("top", topo-10);
            }
        }
        if(jogo.pressionou[TECLA.D]){
            disparo();
        }
    }
    
    function moveInimigo1(){

        posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left", posicaoX-velocidade);
        $("#inimigo1").css("top", posicaoY);

    //Quando x chegar a 0 ele reposiciona o inimigo de volta no final da tela 
        if(posicaoX<=0){
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", posicaoY);
        }
    }

    function moveInimigo2() {
        posicaoX = parseInt($("#inimigo2").css("left"));
        $("#inimigo2").css("left", posicaoX-3);

            if(posicaoX<=0){
                $("#inimigo2").css("left", 775)
            }
    }

    function moveAmigo() {
        posicaoX = parseInt($("#amigo").css("left"));
        $("#amigo").css("left", posicaoX + 1)

        if(posicaoX>906) {
            $("#amigo").css("left", 0);
        }
    }

    function disparo() {
        if(podeAtirar == true){

            podeAtirar = false;

            topo = parseInt($("#jogador").css("top"));
            posicaoX = parseInt($("#jogador").css("left"));
            tiroX = posicaoX + 179;
            topoTiro = topo + 50;
            $("#fundoGame").append("<div id='disparo'></div>",);
            $("#disparo").css("top", topoTiro);
            $("#disparo").css("left", tiroX);

            var tempoDisparo = window.setInterval(executaDisparo, 30);
        }

        function executaDisparo() {
            posicaoX = parseInt($("#disparo").css("left"));
            $("#disparo").css("left", posicaoX + 15); //altera a velocidade do disparo
            
            //Limpar o disparo da tela para executar o próximo disparo
            if(posicaoX>900){

                window.clearInterval(tempoDisparo);
                tempoDisparo = null;
                $("#disparo").remove();
                podeAtirar = true;
            }
        }
    }
    
}




