import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  checkForm : any;
  list: any;
  id: any;
  constructor(private formBuilder: FormBuilder) {
    this.getCrudData()
  }
  ngOnInit(): void {
    this.checkForm = this.formBuilder.group({
      first: ['',Validators.required],
      last: ['',Validators.required],
  });
  }

  getCrudData(){
    let arr = JSON.parse(localStorage.getItem('LIST') || "[]");
    this.list = arr
    return arr;
  }
  
  setCrudData(arr: any){
    localStorage.setItem('LIST',JSON.stringify(arr));
    this.id = null
  }

  onSubmit(){
    if(this.id == null){
    let arr=this.getCrudData();
			if(arr==null){
				let data=[this.checkForm.value];
				this.setCrudData(data);
			}
      else{
				arr.push(this.checkForm.value);
				this.setCrudData(arr);
        console.log(arr)
        this.list = arr
			}
    }
    else{
      let arr=this.getCrudData();
			arr[this.id]=this.checkForm.value;
			this.setCrudData(arr);
    }
    // this.list.push(this.checkForm.value)
    // localStorage.setItem('LIST', JSON.stringify(this.list));
    // console.log(this.list)
    // console.log(this.userlist)
    this.checkForm.reset()
  }
  // clear(){
  //   this.checkForm.reset()
  //   window.localStorage.clear();
  // }
  edit(data:any){
    this.id = data
    console.log(data)
    let arr = this.getCrudData();
    console.log(arr[data]);
    this.checkForm.controls['first'].setValue(arr[data].first);
    this.checkForm.controls['last'].setValue(arr[data].last);
  }
  delete(data:any){
    // console.log(data)
    if (data > -1) { // only splice array when item is found
      this.list.splice(data, 1); // 2nd parameter means remove one item only
    }
    this.checkForm.reset()
    window.localStorage.clear();
  }
}