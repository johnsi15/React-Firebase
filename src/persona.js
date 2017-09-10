class Persona {
  constructor(name) {
    this.name = name;
  }

  saluda(){
    console.log(`Hola, me llamo ${this.name}`);
  }
}

export default Persona;
