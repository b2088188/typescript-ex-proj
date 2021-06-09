import faker from 'faker';

function User(this:{name:string,location:{lat:number, lng:number}}) {
  this.name = faker.name.firstName();
  this.location = {
    lat:+faker.address.latitude(),
    lng:+faker.address.longitude()
  }
}

export {User}