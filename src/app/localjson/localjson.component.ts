import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-localjson',
  templateUrl: './localjson.component.html',
  styleUrls: ['./localjson.component.css']
})
export class LocaljsonComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
	  this.getuser(); // to call on page load
  }
  
  alluser:any[];
  getuser()
  {
	 this.obj.get("./assets/user.json").subscribe(response=>{ 
	    this.alluser = response as string[]; // json to array
	 }); 
  }

}
