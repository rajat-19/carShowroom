import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-externaljson',
  templateUrl: './externaljson.component.html',
  styleUrls: ['./externaljson.component.css']
})
export class ExternaljsonComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
	  this.getcar(); // to call function on page load 
  }
  
  carlist : any[]=[];
  getcar()
  {
	this.obj.get("./assets/carlist.json").subscribe(
	response=>{
		this.carlist = response as string[];
	});
  }  



}






