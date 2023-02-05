import { options } from "/app.js";
import Card from "./Card.js";
import shuffle from "./node_modules/lodash-es/shuffle.js";

export class Deck {
  #cards = [];

  constructor(options) {
    this.values = options.values;
    this.suits = options.suits;
  }

  createFullDeck = () => {
    this.values.forEach((elementValues) => {
      this.suits.forEach((elementSuits) => {
        this.#cards.push(new Card(elementValues, elementSuits));
      });
    });
  };

  shuffle = () => {
    this.#cards = shuffle(this.#cards);
  };

  displayCards = () => {
    this.#cards.forEach((element) => {
      element.display();
    });
  };
}
