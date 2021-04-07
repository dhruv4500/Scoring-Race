/*
* Below Is the defination of game state thena can be used in a game
*There are few types of game states defined
*Use them as you want in the game
*/

var gameState=null;

//gameState types below
const SERVE=0;
const PLAY=1;
const RUN=2;
const SHOW=3;
const HIDE=4;
const START=5;
const STOP=6;
const END=7;
const PAUSE=8;

/*
 * The isTouching function will enable is to check whether two objects are touching or not.
 * This is only used for comparison between two project
 * This function enables us to do or make various functions and tasks
 * We are using predefined function inherited inside our own function as the following code is mot
 enabling us to effeciently code
 
 if(
 object1.x-object2.x<object2.width/2+object1.width/2&&
 object2.x-object1.x<object1.width/2+object2.width/2&&
 object1.x-object2.x<object2.height/2+object1.height/2&&
 object2.x-object1.x<object1.height/2+object2.height/2 ){}
 */

function isTouching(object1,object2){

    if(object1.isTouching(object2)){

        return true;

       }else{
        return false;
       }
}

/*
 * The bounce off function enables to prevent the sprite to stop on touching an object
 * The sprite will reverse its motion if this function is used
 * The code for it is below given:
 
 object1.bounceOff(object2);
 */
