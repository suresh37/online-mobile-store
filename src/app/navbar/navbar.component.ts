import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
    console.log('Inside navbar component')
  }

  ngOnInit() {
   /*  console.log('Inside navbar component') */
  }

}
