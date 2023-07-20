class Pollito {
  constructor() {
    console.log("esto ocurre una sola vez cuando se crea un nuevo pollito");
    //crear el elemento en el DOM
    this.node = document.createElement("img");
    this.node.src = "./images/flappy.png";
    gameBoxNode.append(this.node);

    //aqui las propiedades pollito
    this.x = 50; //posiciones x y ancho alto
    this.y = 50;
    this.w = 40;
    this.h = 35;

    this.gravitySpeed = 1;
    this.jumpSpeed = 50;

    //ajustar el tamaño y posicion inicial del pollito
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  //metodos de pollito
  gravityEffect = () => {
    this.y += this.gravitySpeed; //ajustar velocidad de gravedad

    this.positionUpdate();
  };

  jumpEffect = () => {
    this.positionUpdate();
    this.y -= this.jumpSpeed;
  };

  positionUpdate = () => {
    //el pollito solo se mueve en el eje y
    this.node.style.top = `${this.y}px`;
  };


  
  //el pollito solo se mueve en el eje y
  //si otros cambios afectaran al pollito irian en esta seccion


}
