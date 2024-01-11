/*Slowo kluczowe return zwraca cos z funkcji, to cos bedzie dostepne w miejscu wywolania funkcji */
//odwolywanie przez this tylko do pol w objekcie albo klasie

class Cheese {
  constructor(canvas, x, y) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    console.log(x, y);
  }
}

// class Dog {
//   constructor(nnn) {
//     this.name = nnn;
//   }

//   bark() {
//     console.log(this.name + " is barking");
//   }
// }

// var azor = new Dog("azor");
// azor.name = "AZOR";
// azor.bark();

// var pluto = new Dog("pluto");
// pluto.bark();
