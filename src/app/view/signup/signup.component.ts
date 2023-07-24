import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MessageComponent} from "../../util/dialog/message/message.component";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  hide = true;

  signupform: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog) {

    this.signupform = this.fb.group({

      "username": new FormControl("", [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(7)
        ]
      ),

      "password": new FormControl("", Validators.required),
      "repassword": new FormControl("", Validators.required)

    });

    this.signupform.controls['username'].setValue("");
    this.signupform.controls['password'].setValue("");

  }


  authenticate(): void {
    if (this.signupform.controls["username"].value == "admin" && this.signupform.controls["password"].value == "1234")
      this.router.navigateByUrl("main/home");
    else {
      const dialogRef = this.dialog.open(MessageComponent, {
        width: '500px',
        data: {
          heading: "Invalid Login Details",
          message: "Username/Password Empty or Inavlid. Check for Username Length"
        }
      });

      dialogRef.afterClosed().subscribe(async result => {
        if (!result) {
          return;
        }
      });

      this.router.navigateByUrl("login");
    }
  }


  signup(): void {

    const dialogRef = this.dialog.open(MessageComponent, {
      width: '500px',
      data: {heading: "Sign Up Not Available", message: "Public Registration Not Allowed. Please Contact System Admin"}
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (!result) {
        return;
      }
    });

  }
}
