var gameState = 'start';
var protagonista;
var chaoFalso;

function preload(){
    imgTelaInicial = loadImage("./assets/Tela+Inicial.png");
}

function setup(){
    //criar a tela do jogo
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(imgTelaInicial);

    if(gameState == 'start'){
        novoGame = new Start();
        novoGame.inicio();
    }

    if(gameState == 'gamePlay'){
        console.log(" oi já estamos jogando !!! ")
        gamePlay = new GamePlay();
        gamePlay.comeco();
        gamePlay.controles();
    }

    drawSprites();
}