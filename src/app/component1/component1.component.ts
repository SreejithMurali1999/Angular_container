import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { My_service } from '../service/info_service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  // title ="Gadgeon";
  // btnclick() {
  //   alert("hello from"+this.title);
  // }

  // btnclick() {
  //   const service = new My_service();
  //   service.onclickbtn(this.title);
  // }

}
