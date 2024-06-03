class Person {
  constructor(_name, _surname, _age, _hobby) {
    this.name = _name;
    this.surname = _surname;
    this.age = _age;
    this.hobby = _hobby;
  }

  message() {
    document.write(`<span>The name of the person is ${this.name} ${this.surname} and is of age
        ${this.age} and likes to do ${this.hobby}</span></br>`);
    const string1 = `The name of the person is ${this.name} ${this.surname} and is of age ${this.age} and likes to do ${this.hobby}`;
    const array1 = string1.split(" ");
    const poepies = document.getElementById("p1");
    for (let i = 0; i < array1.length; i++) {
      const spanner = document.createElement("span");
      spanner.setAttribute("id", `span${i}`);
      spanner.innerHTML = array1[i];
      poepies.appendChild(spanner);
      if (i === 0 || i % 2 === 0) {
        document.getElementById(`span${i}`).style.color = "#FFF";
      } else {
        document.getElementById(`span${i}`).style.color = "#000";
      }
    }
  }
}

class CareerPerson extends Person {
  constructor(_name, _surname, _age, _hobby, _jobDescription, _monthsInJob) {
    super(_name, _surname, _age, _hobby);
    this.jobDescription = _jobDescription;
    this.monthsInJob = _monthsInJob;
  }

  careerPersonDescription() {
    document.write(`<span>Career Person ${this.name} ${this.surname} is
        ${this.age} old, with a hobby of ${this.hobby} and in a job of
        ${this.jobDescription} for ${parseFloat(
      (this.monthsInJob / 12).toFixed(1)
    )}
        years.</span></br>`);
  }
}

let newPerson1 = new Person("Mary", "Hanks", 39, "Tennis");

let newCareerPerson1 = new CareerPerson(
  "Peter",
  "Brown",
  44,
  "Fishing",
  "Software Developer",
  240
);

newCareerPerson1.message();

newCareerPerson1.careerPersonDescription();

const careerPeople = [
  new CareerPerson(
    "Gerry",
    "Whitehouse",
    33,
    "Camping",
    "Network Engineer",
    55
  ),
  new CareerPerson("Luke", "Wallaby", 41, "Boating", "Operator", 148),
  new CareerPerson(
    "Danny",
    "de Bruto",
    38,
    "Reading",
    "Software Engineer",
    120
  ),
  new CareerPerson(
    "Sally",
    "Lombaard",
    27,
    "Cooking",
    "Administration Assistant",
    74
  ),
  new CareerPerson("John", "Lamb", 47, "Walking", "Project Manager", 241),
  new CareerPerson(
    "Andrew",
    "Frost",
    52,
    "Golf",
    "Senior Project Manager",
    350
  ),
  new CareerPerson(
    "Paul",
    "Sheehan",
    43,
    "Badminton",
    "Systems Specialist",
    200
  ),
  new CareerPerson("Mary", "Cooper", 40, "Interior Design", "Secretary", 209),
  new CareerPerson(
    "Chris",
    "Sidaway",
    42,
    "Gambling",
    "Technical Specialist",
    277
  ),
];

function showCareerPeople(careerPeople) {
  for (let p of careerPeople) {
    p.careerPersonDescription();
  }
}

showCareerPeople(careerPeople);
