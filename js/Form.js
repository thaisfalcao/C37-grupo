class Form {
  constructor() {
    // CRIE OS ELEMENTOS DA CLASSE
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "título do jogo");
    this.greeting = createElement("h2");
  }

  setElementPosition() {
    // DEFINA A POSIÇÃO DOS ELEMENTOS
    this.input.position(width/2 - 110, height/2 - 80);
    this.playButton.position(width/2 - 90, height/2 - 20);
    this.titleImg.size(1610/1.2,192/1.2)
    this.titleImg.position(10,100);
    this.greeting.position(width/2 - 300, height/2 -100);
  }


  hide() {
   // USE A FUNÇÃO PARA DESAPARECER OS ELEMENTOS
   this.input.hide();
   this.playButton.hide();
   this.greeting.hide();
  }

  handleMousePressed() {
   // CRIE A FUNÇÃO DE PRESSIONAMENTO DE TECLA

    
    
   /* O símbolo usado para escrever a mensagem abaixo (laranja) é a crase. */
  }

  display() {
    // CHAME A FUNÇÃO DE POSIÇÃO DOS ELEMENTOS
    this.setElementPosition();
    // CHAME A FUNÇÃO DE PRESSIONAMENTO DE TECLA
    this.handleMousePressed();
  }
}
