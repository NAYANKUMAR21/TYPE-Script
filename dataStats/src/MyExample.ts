class MyClass<T> {
  constructor(public data: T) {}
  add(a: T): T {
    return a;
  }
}

interface Type {
  name: string;
  age: number;
  voted: boolean;
}

let x = new MyClass<Type>({ name: 'string', age: 24, voted: true });
let y = new MyClass<number>(25);
let z = new MyClass<string>('Nayan');
