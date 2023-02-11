import { faker } from '@faker-js/faker';
// API KEY = AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU
export class Company {
  CompanyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.CompanyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `<div>
                <h1>Company Name : ${this.CompanyName}</h1>
                <h2>Company Catch Phrase:${this.catchPhrase}</h2>
            </div>
    `;
  }
}
