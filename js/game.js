class Game {
  constructor() {
    //aqui estaran todas las propiedades de mi juego

    //aqui vamos a crear un pollito. newPollito
    this.pollito = new Pollito();

    //vamos a agregar los tubos
    //this.unObstaculo = new Obstaculo()
    this.obstaculosArr = [];

    this.frames = 0;
    this.isGameOn = true;
  }

  collisionPollitoObstaculos = () => {
    this.obstaculosArr.forEach((cadaObstaculo) => {
      if (
        this.pollito.x < cadaObstaculo.x + cadaObstaculo.w &&
        this.pollito.x + this.pollito.w > cadaObstaculo.x &&
        this.pollito.y < cadaObstaculo.y + cadaObstaculo.h &&
        this.pollito.y + this.pollito.h > cadaObstaculo.y
      ) {
        // Collision detected!
        this.gameOver()
      }
    });
  };

  gameOver = () => {
    this.isGameOn = false
    gameScreenNode.style.display= "none"
    gameoverSreenNode.style.display = "flex"
  }

  collisionPollitoSuelo = () => {
    if (this.pollito.y + this.pollito.h > gameBoxNode.offsetHeight) {
      this.gameOver()
    }
    console.log("el pollito se estampo suelo");
  };

  obstaculosDesaparecen = () => {
    //si el primer elemento del array ha salido de la vista
    if (this.obstaculosArr[0].x < -50) {
      this.obstaculosArr[0].node.remove(); //remover el elemento de dom
      this.obstaculosArr.shift(); //remover el elemento del array
    }
    //removemos el primer elemento del array
  };

  obstaculosAparecen = () => {
    //cuando queremos que aparezcan obstaculos
    //-al inicio del juego
    //- cuando pase un tiempo aparece otro
    if (this.obstaculosArr.length === 0 || this.frames % 120 === 0) {
      let randomPositionY = Math.floor(Math.random() * -200);

      let nuevoObstaculoArriba = new Obstaculo(randomPositionY, true);
      this.obstaculosArr.push(nuevoObstaculoArriba);

      let nuevoObstaculoAbajo = new Obstaculo(randomPositionY + 390, false);
      this.obstaculosArr.push(nuevoObstaculoAbajo);
    }
  };

  //los metodos de mi juego

  gameLoop = () => {
    this.frames++;
    //muchas cosas
    this.pollito.gravityEffect();
    //this.unObstaculo.automaticMovement();

    this.obstaculosAparecen();

    this.obstaculosArr.forEach((cadaObstaculo) => {
      cadaObstaculo.automaticMovement();
    });

    this.obstaculosDesaparecen();

    this.collisionPollitoSuelo();

    this.collisionPollitoObstaculos();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

//planificacion

//propiedades
//el pollo => x, y, w, h   CHECK
//los tubos => x, y, w, h  check

//METODOS
//randomizar los tubos   check
//colisiones de pollo con tubos
//colisiones de pollo con el suelo check
//el movimiento de los tubos
//el movimiento del pollo es la caida
//accion del salto = addEventListener
//gameover

//extras
//propiedad del score
//metodo incrementar una puntuacion
//efecto de aumentar la velocidad(complejo)
//reinicio del juego

//extra EXTRA =>
//sonidos
