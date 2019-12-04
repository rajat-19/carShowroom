import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array2',
  templateUrl: './array2.component.html',
  styleUrls: ['./array2.component.css']
})
export class Array2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  item:any[]=[
                {"name":"Apple", "price":"200", "qty":"5"},
                {"name":"Apple2", "price":"300", "qty":"55"},
                {"name":"Apple3", "price":"400", "qty":"45"},
                {"name":"Apple4", "price":"500", "qty":"35"},
                {"name":"Apple5", "price":"600", "qty":"55"},
                {"name":"Apple5", "price":"700", "qty":"75"}
             ];

  save(name:string, price:string, qty:string)
  {
    var newitem = {"name":name, "price":price, "qty":qty};
    this.item = this.item.concat(newitem); // to add add into another array
  }

}
