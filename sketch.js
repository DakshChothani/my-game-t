var SERVE = 0;
var PLAY = 1;
var END = 2;
var gameState = SERVE;

var warrior, warrior_running,warrior1,warrior_jump;
var back_ground, background_image, invisibleGround;

function preload(){
  back_image = loadAnimation("background.png");

  warrior_running = loadAnimation("Warrior_Walk.gif");
  warrior_jump = loadAnimation("Warrior_Jump.gif");
  warrior_idle = loadAnimation("Warrior_IDLE.gif");
  warrior_attack = loadAnimation("Warrior_Attack.gif");
  warrior_skill = loadAnimation("Warrior_Skill.gif");
  warrior_hit= loadAnimation("Warrior_Hit.gif");
  
}

function setup() {
  createCanvas(displayWidth , displayHeight - 115);
  
  back_ground = createSprite (displayWidth, displayHeight - 1000);
  back_ground.addAnimation("displayImage",back_image);
  back_ground.scale = 3;
  back_ground.x = back_ground.width /2;
  back_ground.velocityX = -6;
  //console.log(back_ground.position.x);

  warrior = createSprite(displayWidth - 1800,displayHeight - 260);
  warrior.addAnimation("running", warrior_running);
  warrior.scale = 1;
  warrior.addAnimation("jump1", warrior_jump);
  warrior.addAnimation("idle", warrior_idle);
  warrior.addAnimation("attack", warrior_attack);
  warrior.addAnimation("skill", warrior_skill);
  warrior.addAnimation("hit", warrior_hit);
  
  invisibleGround = createSprite(displayWidth - 1000 , displayHeight - 120,2000,10);
  invisibleGround.visible = false;
 
}

function draw() {
  background(180);
  
  if(gameState === 0){
    warrior.changeAnimation("idle",warrior_idle);
    back_ground.velocityX = 0;
    //if(keyMousePressed("Play")) {
    //  gameState === 1
    //}
  }
  
  if(gameState === 1) {
	if(keyWentDown("space")) {
		warrior.velocityY = -15;
    warrior.changeAnimation("jump1",warrior_jump);
    warrior.scale = 1.4;
  }
  if(keyWentUp("space")) {
    warrior.changeAnimation("running",warrior_running);
    warrior.scale = 1;
  }
	  warrior.velocityY = warrior.velocityY + 0.8;
  
  if (back_ground.x < 0){
    back_ground.x = back_ground.width/2;
  }
  warrior.collide(invisibleGround);
  textSize(50);
  fill("white");
  text("Play",displayWidth / 2, displayHeight / 2);  
  }
  //else if(gameState === 2) {
  //  gameOver.visible = true;
  //  
  //back_ground.velocityX = 0;
	//warrior.velocityY = 0;
	//
  //}
  drawSprites();

}

//function reset(){
//  gameState = PLAY;
//
//}
