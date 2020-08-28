import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  valueRecieved:number = null;
  constructor(private route:ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.logValuesOfRoute();
  }

  logValuesOfRoute(){
    this.valueRecieved = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  GoBack(){
    this.location.back();
  }

}
