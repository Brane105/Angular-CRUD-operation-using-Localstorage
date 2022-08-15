import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DepartmentComponent } from './department/department.component';
import { LocationComponent } from './location/location.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path : "user",component : UserComponent},
  {path : "depart",component : DepartmentComponent},
  {path : "location",component : LocationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
