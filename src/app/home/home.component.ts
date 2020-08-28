import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  RedirectRoute(){
    this.route.navigate(['employee', 2]);
  }

  RedirectRoute2(){
    this.route.navigate(['employee2', {name:'krishna', id:3}]);
  }

  RedirectRoute3(){
    this.route.navigate(['employee2'],{queryParams:{name:'krishna', id:3}})
  }

}
