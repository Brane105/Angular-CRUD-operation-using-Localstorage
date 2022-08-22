import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private locations: any= [
    {
      locationCode: 1,
      location: 'Mumbai',
    },
    {
      locationCode: 2,
      location: 'Bangalore',
    },
    {
      locationCode: 3,
      location: 'Chennai',
    },
  ];
  loc: any;
  constructor() {}

  allLocations(): any{
    return this.locations;
  }

  getLocationByCode() {}

  storeLocation(locationCode: number, location: string): any {
    this.loc = { locationCode: locationCode, location: location };
    this.locations.push(this.loc);
    console.log('Service ' + this.locations);
  }
  editLoc(value: number) {
    console.log(value)
    for (let i = 0; i <= this.locations.length; i++) {
      if (this.locations[i].locationCode === value) {
        console.log(this.locations[i]);
        break
      } else {
        console.log("err")
      }
    }
  }
  deleteLoc() {}
}
