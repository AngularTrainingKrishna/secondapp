import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.css']
})
export class Employee2Component implements OnInit {
  username:string;
  id:number;
  constructor(private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    //this.username = this.activatedRoute.snapshot.paramMap.get('name');
    //this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    
    this.username = this.activatedRoute.snapshot.queryParamMap.get('name');
    this.id = parseInt(this.activatedRoute.snapshot.queryParamMap.get('id'));
  }

  GoBack(){
    this.location.back();
  }

}
