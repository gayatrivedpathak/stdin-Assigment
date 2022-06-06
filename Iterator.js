class Iterator {
  constructor(elements) {
    this.index = 0;
    this.elements = elements;
  }

  currentQuestion() {
    return this.elements[this.index];
  }

  nextQuestion() {
    return this.elements[++this.index];
  }
}

exports.Iterator = Iterator;
