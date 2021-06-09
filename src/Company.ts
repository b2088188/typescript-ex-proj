import faker from 'faker';

function Company(this:{
	companyName:string, 
	catchPhrase:string, 
	location:{lat:number, lng: number}
}) {
this.companyName = faker.company.companyName();
this.catchPhrase = faker.company.catchPhrase();
this.location = {
	lat: +faker.address.latitude,
	lng: +faker.address.longitude
}
}

export {Company}