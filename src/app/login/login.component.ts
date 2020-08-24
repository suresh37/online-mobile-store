import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
//import { AuthService } from '../auth.service';
import { MessageDialogComponent } from './../product/message-dialog/message-dialog';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showSpinner = false;
  model: any = {};
  loading = false;
  returnUrl: string;
  username: string;
  password: string;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public authService: AuthService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.showSpinner = true;
    this.loading = true;
    if (this.username != 'admin' || this.password != 'admin') {
       this.openMessageDialog("Please provide valid username or password");
      return;
    }
    this.authService.login().subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        // this.alertService.error(error);
        this.loading = false;
        this.showSpinner = false;
      });

  }

  openMessageDialog(message) {
    let data = { message };
    const dialogConfig = new MatDialogConfig(); //dialogConfig.disableClose = true; //dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(MessageDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }

  /* constructor(private router: Router) { }
    username: string;
    password: string;
    ngOnInit() {
      console.log('Inside Login Component')
    }
    login(): void {
      if (this.username == 'admin' && this.password == 'admin') {
        this.router.navigate(["home"]);
      } else {
        alert("Invalid credentials");
      }
    } */
}
