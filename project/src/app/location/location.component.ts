import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locations: any = [];
  locForm: any;
  id: any;
  Larray: any = [];

  constructor(private data: ServiceService , private builder : FormBuilder ) {}

  ngOnInit(): void {
    this.locations = this.data.allLocations();
    console.table(this.locations);
    this.locForm = this.builder.group({
      locationCode: ['', Validators.required],
      location: ['', Validators.required]
    });
  }
  // onEdit(locCode:number) {
  //   console.log(locCode)
  //   this.data.editLoc(locCode)
  // }
  edit(data:any){
    this.id = data
    console.log(data)
    let arr = this.locations
    console.log(arr[data]);
   if(arr[data] != undefined){
    this.locForm.controls['locationCode'].setValue(arr[data].locationCode);
    this.locForm.controls['location'].setValue(arr[data].location);
    this.Larray =({locationCode : this.locForm.controls['locationCode'].value , location : this.locForm.controls['location'].value})
   }
   else{
    console.log(arr[data])
   }
  }
  onSubmit(){
    let locCode = this.locForm.value;
    let arr=this.locations;
    arr[this.id] = locCode;
    console.log(this.locations)
  }
}
