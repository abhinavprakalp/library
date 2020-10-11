function bounceoff(para1,para2){
    if (para1.x - para2.x < para1.width/2 + para2.width/2
     && para2.x - para1.x < para2.width/2 + para1.width/2) {
       para1.velocityX = para1.velocityX * (-1);
       para2.velocityX = para2.velocityX * (-1);
   }
   if (para1.y - para2.y < para2.height/2 + para1.height/2
   && para2.y - para1.y < para2.height/2 + para1.height/2){
     para1.velocityY = para1.velocityY * (-1);
     para2.velocityY = para2.velocityY * (-1);
    }
 
 }

 function isTouching (movingRect,fixedRect){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
        && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
        && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
        && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
            return true;
    }
    else {
      return false;
    }

 }