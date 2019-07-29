import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../core/model/userModel'
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/core/service/user.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  user: UserModel = new UserModel();
  email = new FormControl(this.user.email, [Validators.required, Validators.pattern('^[a-zA-Z0-9._]+@[a-zA-Z]+.[a-zA-Z]+$')])

  constructor(public formBuilder: FormBuilder, 
    private snackBar: MatSnackBar, 
    private userService: UserService, 
    private router: Router) { }

  ngOnInit() {

  }

  emailError() {
    return this.email.hasError('required') ? 'Email Id is require' :
      this.email.hasError('pattern') ? 'Email Id is Invalid, please recheck once' :
        '';
  }

  /**
   * onSubmit forget password function
   */
  forgetPassword() {
    this.userService.forgetPassword('forgetPassword', this.user).subscribe(
      response => 
      {
        this.snackBar.open(
          'link sent on your email Successfully', 
          'End now', 
          { duration: 1000 });
        this.router.navigateByUrl('resetPassword');
      },

      error => 
      {
        this.snackBar.open(
          "Failed to generate link for forget password",
          "undo",
          { duration: 2500 }
        )
      }
    )
  }
}
