import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Location } from '../model';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-location',
  templateUrl: './input-location.component.html',
  styleUrls: ['./input-location.component.css']
})
export class InputLocationComponent implements OnInit {
  locations: Array<Location> = Array<Location>();
  locForm: any;
  constructor(private data: DataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.locForm = this.formBuilder.group({
      locationCode: ['', Validators.required],
      location: ['', Validators.required]
    });
  }
  onSubmit(){
    let locCode = this.locForm.value;
    this.data.storeLocation(locCode.locationCode, locCode.location)
    console.log(locCode);
  }
}
