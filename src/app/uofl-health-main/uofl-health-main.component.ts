import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-uofl-health-main',
  //template: `<p> {{ rando }} </p>`,
  templateUrl: 'uofl-health-main.component.html',
  styleUrls: ['uofl-health-main.component.css']
})
export class UoflHealthMainComponent implements OnInit {

  rando = Math.random();

  ngOnInit(): void {

  }

  constructor(private router: Router, private route: ActivatedRoute) { 

  }

}