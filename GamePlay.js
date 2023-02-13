class GamePlay{

    constructor(){
       
    }

    comeco(){
        background('blue');

        fill('yellow');
        protagonista = createSprite(60, height/2,50,150);
        
        chaoFalso = createSprite(width/4, height+50,width/2,20);
    }

    controles(){
        if(keyDown('d')){
            protagonista.x = protagonista.x+5;
          }
          console.log(protagonista.x)
    }

}