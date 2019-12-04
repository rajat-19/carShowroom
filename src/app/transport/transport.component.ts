import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
		this.getcar();
  }

	mycar:any[]=[];
	cardata:any[];
	getcar()
	{
		var url = "http://cybotrix.com/ios/car.json";
		this.obj.get(url).subscribe(response=>{
			this.mycar = response as string[];
		});
	}
	
	getinfo(index:number)
	{
		this.cardata = this.mycar[index];
	}

}
