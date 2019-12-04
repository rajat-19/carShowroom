import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array3',
  templateUrl: './array3.component.html',
  styleUrls: ['./array3.component.css']
})
export class Array3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  books:any[] = ["php", "Java", "Python", "Asp", "Html", "CSS"];

  mybook:any[] = [
                    {"name":"php", "price":200, "qty":1},
                    {"name":"java", "price":2200, "qty":10},
                    {"name":"python", "price":2500, "qty":11},
                    {"name":"asp", "price":2300, "qty":13},
                    {"name":"Html", "price":2800, "qty":12},
                    {"name":"css", "price":2100, "qty":16},
                    {"name":"vb", "price":2900, "qty":19}
                 ];
  

}
