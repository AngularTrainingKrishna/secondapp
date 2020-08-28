import { Component, OnInit, ViewChild } from '@angular/core';
import { AboutchildComponent } from '../aboutchild/aboutchild.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // @ViewChild(AboutchildComponent) 
  // private aboutChildComponent: AboutchildComponent;
  constructor() { }

  ngOnInit(): void {
  }

  // start(){
  //   this.aboutChildComponent.start();
  // }

}
