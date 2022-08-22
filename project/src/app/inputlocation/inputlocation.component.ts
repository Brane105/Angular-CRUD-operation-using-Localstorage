import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-inputlocation',
  templateUrl: './inputlocation.component.html',
  styleUrls: ['./inputlocation.component.css']
})
export class InputlocationComponent implements OnInit {

  locations: Array<Location> = Array<Location>();
  locForm: any;
  constructor(private data: ServiceService, private formBuilder: FormBuilder) { }

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
