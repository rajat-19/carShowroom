import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor() { }
  name:string;
  ngOnInit() {
	   this.name = localStorage.getItem("fullname");
  }
  
 
  
  logout()
  {
	 localStorage.setItem("fullname","");
	 window.location.href="http://localhost:4200";
  }
  

}




