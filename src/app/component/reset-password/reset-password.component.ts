import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../core/model/userModel'
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/core/service/user.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent implements OnInit {
  data: UserModel = new UserModel();
  token: String
  password = new FormControl(this.data.password, [Validators.required, Validators.minLength(6)])
  cpassword = new FormControl(this.data.cpassword, [Validators.required])

  constructor(public formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }
  accesstoken = this.route.snapshot.paramMap.get('token')

  ngOnInit() {
    localStorage.setItem('token1', this.accesstoken)
  }

  passwordError() {
    return this.password.hasError('required') ? 'Passowrd is require' :
      this.password.hasError('minlength') ? 'Minimum length must be 6' : '';
  }

  cpasswordError() {
    return this.cpassword.hasError('required') ? 'Confirm Passowrd is require' :
      this.cpassword.hasError('minlength') ? 'Minimum length must be 6' : '';
  }

  /**
   * onClick function for reset password
   */
  resetPassword() {
    this.userService.resetPassword('resetPassword/' + this.accesstoken, this.data).subscribe(
      response => {
        this.snackBar.open(
          'password reset Successfully',
          'End now',
          { duration: 1000 });
        this.router.navigateByUrl('login');
      },

      error => {
        this.snackBar.open(
          "Failed to reset password",
          "undo",
          { duration: 2500 }
        )
      }
    )
  }
}
