/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function placebeep(){
   putBeeper();
   move();
   move();
}
function turnRight(){
   turnLeft();
   turnLeft();
   turnLeft();
}
function fillAlternate(){
   placebeep();
   placebeep();
   putBeeper();
   turnLeft();
   move();
   turnLeft();
   move();
   placebeep();
   putBeeper();
   move();
   turnRight();
   move();
   turnRight();
}
function main(){
   //your code here
   fillAlternate();
   fillAlternate();
   placebeep();
   placebeep();
   putBeeper();
   
}
