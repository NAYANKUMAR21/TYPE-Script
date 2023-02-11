const drink = {
  carbon: true,
  color: 'black',
  anount: 50,
};
//tuple example
const pepsi: readonly [string, boolean, number] = ['black', true, 50]; //readonly makes it length only to givin elements in the array

//type alias
type Drink = [string, boolean, number];
const sprit: Drink = ['clear', true, 20];

console.log(pepsi);
