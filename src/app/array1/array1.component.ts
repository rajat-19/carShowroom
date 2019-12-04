import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array1',
  templateUrl: './array1.component.html',
  styleUrls: ['./array1.component.css']
})
export class Array1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  item : any[] = ["Apple", "Mouse", "Keyboard", "Books", "Laptop"];
  category : any[] = ["Computer", "Dress", "Food", "Education", "Travel"];

 msg : string;
 save(itemname:string)
 {
   this.item.unshift(itemname);
   this.msg="Item Added Successfully !";
 }

}
