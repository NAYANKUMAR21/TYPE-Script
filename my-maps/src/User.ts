import { faker } from '@faker-js/faker';
export class User {
  Name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.Name = faker.name.firstName();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `User Name : ${this.Name}`;
  }
}
export const red = 'red';
export default function Namer() {
  //example for defaults exports
  return 'nayan';
}
