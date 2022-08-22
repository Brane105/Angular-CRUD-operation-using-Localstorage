import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DepartmentComponent } from './department/department.component';
import { LocationComponent } from './location/location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputlocationComponent } from './inputlocation/inputlocation.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DepartmentComponent,
    LocationComponent,
    InputlocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
