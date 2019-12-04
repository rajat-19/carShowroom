import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array4',
  templateUrl: './array4.component.html',
  styleUrls: ['./array4.component.css']
})
export class Array4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  item:any[]=[
                {
                  "cat":"Mobile",
                  "name":["Nikia", "Intex", "Samsung", "Lg"]
                },

                {
                  "cat":"Books",
                  "name":["php", "java", "python", "html"]
                },

                {
                  "cat":"Laptop",
                  "name":["Dell", "Wipro", "Lenovo", "Acer"]
                },
                {
                  "cat":"Dress",
                  "name":["Form MALE", "For Female", "ALL Time"]
                },

            ];

  itemlist:any[];
  getitem(index:number)
  {
    this.itemlist = this.item[index].name;
  }

}
