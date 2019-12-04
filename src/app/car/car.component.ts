import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
	  this.getcar();
  }
  
  carlist:any[]=[];
  getcar()
  {
	  this.obj.get("http://cybotrix.com/ios/car.json").subscribe(
		response=>{
			this.carlist = response as string[];
		})
  }
  p:number=1;
  keyword:string;

}
//https://jobswalkin.com/api/getkeyword

  /*
	create a component "mykeyword"
	read data from top url 
	display in 1 line 3 record
	per page 6 record
	add search
	add pagination
	
  */



