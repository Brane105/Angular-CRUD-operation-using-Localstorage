import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private locations: any= [
  ];
  loc: any;
  constructor() {}

  allLocations(): any{
    return this.locations;
  }

  getLocationByCode(value: number) {
    for(let i=0; i< this.locations.length; i++){
      let user=this.locations[i];
      if(user.locationCode == value){
        return this.locations[i];
      }
    }
  }
  storeLocation(locationCode: number, location: string): any {
    this.loc = { locationCode: locationCode, location: location };
    this.locations.push(this.loc);
    console.log('Service ' + this.locations);
  }
  editLoc(obj : any) {
        console.log(obj)
    for(let i=0; i< this.locations.length; i++){
      let data=this.locations[i];
      if(data.locationCode == obj.locationCode){
        data.locationCode = obj.locationCode;
        data.location = obj.location;
      }
    }
  }
  
  // deleteLoc(obj : any) {
  //   console.log(obj)
  //   for(let i=0; i< this.locations.length; i++){
  //     let data=this.locations[i];
  //     if(data.locationCode == obj.locationCode){
  //       const indexOfObject = data.findIndex((object: { locationCode: number; }) => {
  //         return object.locationCode === i;
  //       });
  //      console.log(indexOfObject); // 👉️ 1
  //      this.locations.splice(indexOfObject, 1);  
  //     }
  //   }
  // }
}
