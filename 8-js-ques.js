class Lizard {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "orange" } = {}) {
    this.newColor = newColor;
  }
}

const tommy = new Lizard({ newColor: "orange" });
console.log(tommy.colorChange("blue")); //colorChange is a static method and is meant to be called on the class itself, not on an instance of the class.
console.log(Lizard.colorChange("blue"));
