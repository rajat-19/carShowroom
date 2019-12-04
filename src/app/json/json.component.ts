import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //add this line
@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
	  this.getuser(); // to ececute on page load
  }
  
  user:any[]=[];
  getuser()
  {
	 this.obj.get("./assets/user2.json").subscribe(response=>{ 
	    this.user = response as string[]; // json to array
	 });  
  }

}
