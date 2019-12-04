import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
  }
  
  blockstatus:boolean=true; // show login
  
  enableblock(blockname)
  {
	  if(blockname=="new")
	  {
		  this.blockstatus = false; // display sign up
	  }
	  
	  if(blockname=="old")
	  {
		  this.blockstatus = true; // hide signup , show login
	  }
  }
  
  
  email:string;
  pass:string;
  errormsg:string;
  
  gologin()
  {
  if((this.email=="") || (this.pass=="")) {
    this.errormsg="sorry, invalid input";
  }
  else {
	localStorage.setItem("fullname", this.email);
  window.location.href="/home";
  }
  }
  fname:string;
  mobile:string;
  emailid:string;
  password:string;
  address:string;

  register()
  {
    var url="https://jobswalkin.com/web/register.php";
    var input = {
      "name": this.fname,
      "mobile":this.mobile,
      "email": this.emailid,
      "password":this.password,
      "address": this.address

    }
    this.obj.post(url, input).subscribe(
      response=>{
        this.blockstatus = true; // to show login block
        this.fname="";
        this.mobile="";
        this.emailid="";
        this.password="";
        this.address="";
        this.errormsg="Register Success! Please Login";
      }
      );
  }

}






