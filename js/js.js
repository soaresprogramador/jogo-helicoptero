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
    }

    function moveFundo() {
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position", esquerda-1);
    }
    
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
            //chamar disparo
        }
    }
    
    
}




