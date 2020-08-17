import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  username: string;
  password: string;
  ngOnInit() {
  }
  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["home"]);
    } else {
      alert("Invalid credentials");
    }
  }
}
