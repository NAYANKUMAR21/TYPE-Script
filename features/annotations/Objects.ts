const profile = {
  name: 'nayan',
  age: 20,
  coords: {
    lat: 0,
    long: 0,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
let {
  coords: { lat, long },
}: {
  coords: { lat: number; long: number };
} = profile;
