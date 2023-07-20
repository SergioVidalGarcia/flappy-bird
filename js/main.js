// * GLOBAL VARIABLES

const startBtnNode = document.querySelector("#start-btn");
const restartBtnNode = document.querySelector("#restart-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
let gameObj = null; //el juego aun no ha iniciciado
const gameoverSreenNode = document.querySelector("#gameover-screen");   

// * STATE MANAGEMENT FUNCTIONS

function startGame() {
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  // que el juego inicie
  //pendiente crear un nuevo objeto de Game y iniciar el gameloop

  gameObj = new Game();
  console.log(gameObj);

  gameObj.gameLoop();
}



// * ADD EVENT LISTENERS

startBtnNode.addEventListener("click", startGame);
restartBtnNode.addEventListener("click", startGame);
gameBoxNode.addEventListener("click", () => {
  //como invocamos la funcion jumpEffect
  if (gameObj.isGameOn === true){
    gameObj.pollito.jumpEffect();
  }
  
});
