"use strict";

let ball = document.querySelector('#ball');
let stick = document.querySelector('#stick');
let stickX = 0;
let ballX = 0;
let ballY = 0;
let ballMx = 5;
let ballMy = 5;

onkeydown = stickMove;
let set = setInterval(ballMove, 40);

function stickMove(e){
    if(e.keyCode == 39){
        if(stickX<700){
            stickX += 25;
        }
        console.log(stickX);
    }

    if(e.keyCode == 37){
        if(stickX>0){
            stickX -= 25;
        }
    }


    stick.style.left = stickX + 'px';

}


function ballMove(){
    if(ballX<0 || ballX>745){
        ballMx *= -1;
    }

    if(ballY<0){
        ballMy *= -1;
    }else if(ballY>550 && ballX>=stickX-25 && ballX<=stickX+75){
        ballMx+=1;
        ballMy+=1;
        ballMy *= -1;
    }else if(ballY>550){
      let result = confirm('Uduzdunuz. Oyun yeniden baslasin?');
        clearInterval(set);
        if(result){
            location.reload();
        }
    }
    
    ballX += ballMx;
    ballY += ballMy;

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';

}