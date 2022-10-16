import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipe',
  templateUrl: './demopipe.component.html',
  styleUrls: ['./demopipe.component.css']
})
export class DemopipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//creating json object
  // title="sreejith"
  // today=Date();
  user= {
    id:200,
    name:"sreejith",
    DOB:'27-04-1999',
    salary:26000
  }

}
