import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  
  list: any;

  constructor() {
    this.list = JSON.parse(localStorage.getItem('LIST') || '[]')
   }

  ngOnInit(): void {
  }
}
