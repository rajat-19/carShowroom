import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
	  this.getbook();
  }
  
  books:any[]=[];
  
  getbook()
  {
	  this.obj.get("https://jobswalkin.com/web/booklist.php").subscribe(
		response=>{
			this.books = response as string[];
		})
  }
  
  bookname:string;
  msg:string;
  serverResponse;
  savebook()
  {
	  if(this.bookid !=0){
		  this.updatebook(); // to update the records
	  }else{
		  var url = "https://jobswalkin.com/web/savebook.php";
		  var input = {"name":this.bookname};
		  this.obj.post(url, input).subscribe(response=>{
			  this.serverResponse = response as string[];
			  this.msg = this.serverResponse.status;
			  this.bookname = "";
			  this.getbook(); // to reload the list
		  });
	  }
  }
  
  delete(id:number)
  {
	 var url = "https://jobswalkin.com/web/deletebook.php";
	  var input = {"id":id};
	  this.obj.post(url, input).subscribe(response=>{
		  this.serverResponse = response as string[];
		  this.msg = this.serverResponse.status;
		  this.getbook(); // to reload the list
	  }); 
  }
  
  btntext:string="Save Record";
  bookid:number=0;
  edit(id:number){
	 this.bookid = id;
	 this.btntext = "Please Wait...";
	 var url = "https://jobswalkin.com/web/editbook.php";
	  var input = {"id":id};
	  this.obj.post(url, input).subscribe(response=>{
		  this.serverResponse = response as string[];
		  this.bookname = this.serverResponse.bookname; // to get the name of cuurent book where clicked
		  this.btntext = "Update Record";
	  });
  }
  
  updatebook()
  {
	  this.btntext = "Please Wait Processing...";
	  var url = "https://jobswalkin.com/web/updatebook.php";
	  var input = {"name":this.bookname, "id":this.bookid};
	  this.obj.post(url, input).subscribe(response=>{
		  this.serverResponse = response as string[];
		  this.msg = this.serverResponse.status;
		  this.bookname = "";
		  this.getbook(); // to reload the list
		  this.bookid = 0;
		  this.btntext = "Save Record";
	  }); 
  }
  
  
  

}

// 1. create newproject
// 2. install bootstrap
// 3. install search , pagination 
// 4. create componect 
	//header
	//footer
	//dashboard
	//login
	//profile
// add rounting 
// default is login compnent 

	




