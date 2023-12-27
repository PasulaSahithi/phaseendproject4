import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes:Routes=[
  {path:"addemployee",component:AddemployeeComponent},
  {path:"add",component:AddComponent},
  {path:"employee-detail/:id",component:ViewdetailsComponent},
  {path:"addemployee",component:AddemployeeComponent},
  {path:"updateEmployee/:id",component:UpdateEmployeeComponent},
  {path:"home",component:HomepageComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    AddComponent,
    ViewdetailsComponent,
    UpdateEmployeeComponent,
    HomepageComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
