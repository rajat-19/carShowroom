import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tdetails',
  templateUrl: './tdetails.component.html',
  styleUrls: ['./tdetails.component.css'],
  inputs:["mycardata"]
})
export class TdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
