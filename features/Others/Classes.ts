//public creates a object using the value in calling the constructer
// the name and in arguments without writing this like we write in javaScript
//where as private assigining we wnt be able to reacd it outside the class but we will
//be abel to create a key value  pair in object

class Vehicle {
  constructor(public name: string, public year: number, public code: boolean) {}
  protected honk(): void {
    console.log('HNK');
  }
  private type(): void {
    console.log('no type');
  }
  public Drive(): void {
    console.log('chugg chugg');
    this.type();
  }
}
//arguments which go into super need not have public
// because prefixs are given in the parent classs

class newCar extends Vehicle {
  constructor(
    public wheel: number,
    name: string,
    year: number,
    code: boolean,
    public array: number[]
  ) {
    super(name, year, code);
  }

  private drive(): void {
    console.log('vrrom');
  }
  pritDrive(): void {
    this.drive();
    this.honk();
  }
}
const vehicle1 = new Vehicle('crysta', 40, true);
const vehicle = new newCar(4, 'totota', 20, true, [1, 2, 4]);
console.log(vehicle);


//its just writing and cannot be accessed
interface Person {
  name: string;
  age: number;
  indian: boolean;
  ping(): void;
}
class Details implements Person {
  name: 'string';
  age: 20;
  indian: true;
  ping() {
    console.log(this.age);
  }
}

//npx parcel index.html