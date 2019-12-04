import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule , Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {Ng2SearchPipeModule } from 'ng2-search-filter';//for search filter
import {FormsModule} from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { Array1Component } from './array1/array1.component';
import { Array2Component } from './array2/array2.component';
import { Array3Component } from './array3/array3.component';
import { Array4Component } from './array4/array4.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HrComponent } from './hr/hr.component';
import { EmpComponent } from './emp/emp.component';
import { SalaryComponent } from './salary/salary.component';
import { LeaveComponent } from './leave/leave.component';
import { JsonComponent } from './json/json.component';
import { LocaljsonComponent } from './localjson/localjson.component';
import { ExternaljsonComponent } from './externaljson/externaljson.component';
import { CarComponent } from './car/car.component';
import { TransportComponent } from './transport/transport.component';
import { TdetailsComponent } from './tdetails/tdetails.component';
import { CrudComponent } from './crud/crud.component';
import { LoginComponent } from './login/login.component';

const mypage : Routes = [
				{path:"home", component:DashboardComponent},
				{path:"array1", component:Array1Component},
				{path:"array2", component:Array2Component},
				{path:"array4", component:Array4Component},
				{path:"transport", component:TransportComponent},
				{path:"crud", component:CrudComponent},

                  {
				  path:"hr", component:HrComponent, 
				  children:[
					{path:"emp", component:EmpComponent},
					{path:"salary", component:SalaryComponent},
					{path:"leave", component:LeaveComponent},
					{path:"carlist", component:CarComponent},
				  ]},
						  
				{
					path:"json", component:JsonComponent, 
					children:[
					{path:"localjson", component:LocaljsonComponent},
					{path:"externaljson", component:ExternaljsonComponent},
							 ]
				},

                          //{path:"", redirectTo:"/home", pathMatch:"full"}
                        ];

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    FooterComponent,
    Array1Component,
    Array2Component,
    Array3Component,
    Array4Component,
    DashboardComponent,
    HrComponent,
    EmpComponent,
    SalaryComponent,
    LeaveComponent,
    JsonComponent,
    LocaljsonComponent,
    ExternaljsonComponent,
    CarComponent,
    TransportComponent,
    TdetailsComponent,
    CrudComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(mypage),
	HttpClientModule,
	Ng2SearchPipeModule,
	FormsModule,
	NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
