interface Model {
  summan(): string;
}
const Drink = {
  Name: 'cola',
  year: 2000,
  carbon: true,
  summan(): string {
    return `Name ${this.Name} for the drink prod ${this.year}`;
  },
};
const oldCivic = {
  Name: 'civic',
  broken: true,
  year: 2000,
  summan(): string {
    return `Name ${this.Name} and the year of Prod ${this.year}`;
  },
};

const printSummary = (object: Model): void => {
  console.log(object.summan());
};
printSummary(oldCivic);
printSummary(Drink);
