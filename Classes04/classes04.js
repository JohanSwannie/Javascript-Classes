class Humans {
  constructor(_person1, _person2, _person3) {
    this.person1 = _person1;
    this.person2 = _person2;
    this.person3 = _person3;
  }

  personOne() {
    document.write(
      `<span>${this.person1} only likes ${this.person2} </spane=> </br>`
    );
  }

  personTwo() {
    document.write(
      `<span>${this.person2} only likes ${this.person1} </spanstyle=> </br>`
    );
  }

  personThree() {
    document.write(
      `<span>${this.person3} only likes ${this.person2} </span> </br>`
    );
  }
}

class ExtraPerson extends Humans {
  constructor(_person1, _person2, _person3, _person4) {
    super(_person1, _person2, _person3);
    this.person4 = _person4;
  }

  personThree() {
    document.write(`<span>${this.person4} has reported that ${this.person3} likes
      ${this.person1} as well, inspite of the fact that ${this.person1}
      only likes ${this.person2} </spanle=> </br>`);
  }

  personTwo() {
    super.personTwo();
    document.write(
      `<span>BUT A HUGE CHANGE IN ATTITUDE HAS OCCURED </span> </br>`
    );
    document.write(`<span>Although ${this.person2} only liked ${this.person1} before,
      she also now likes ${this.person3} </span>`);
  }
}

const p1 = new Humans("John", "Mary", "Luke");
const p2 = new ExtraPerson("John", "Mary", "Luke", "Paul");
p2.personThree();
p2.personTwo();
