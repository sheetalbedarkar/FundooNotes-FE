import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../core/model/userModel'
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: UserModel = new UserModel();
  token: String
  email = new FormControl(this.user.email, [Validators.required, Validators.pattern('^[a-zA-Z0-9._]+@[a-zA-Z]+.[a-zA-Z]+$')])
  password = new FormControl(this.user.password, [Validators.required, Validators.minLength(6)])
  constructor(public formBuilder: FormBuilder, private snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, private userService: UserService) { }
  accesstoken = this.route.snapshot.paramMap.get('token')
  ngOnInit() {
  }

  emailError() {
    return this.email.hasError('required') ? 'Email Id is require' :
      this.email.hasError('pattern') ? 'Email Id is Invalid, please recheck once' :
        '';
  }

  passwordError() {
    return this.password.hasError('required') ? 'Passowrd is require' :
      this.password.hasError('minlength') ? 'Minimum length must be 6' : '';
  }

  /**
   * @description onSubmit function to login the user
   * @param user
   */
  login(user) {
    user = {
      email: this.email.value,
      password: this.password.value
    }
    console.log(" user in login ts", user);

    this.userService.login(user).subscribe(response => {
      console.log("RESPONSE", response)
      var userId = response.data[0]._id;
      var firstName = response.data[0].firstname;
      var lastName = response.data[0].lastname;
      var email = response.data[0].email
      var token = response.token

      localStorage.setItem('token', token)
      localStorage.setItem("userId", userId);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      this.snackBar.open(
        'login Successful',
        'End now',
        { duration: 1000 });
      this.router.navigateByUrl('/u');
    },

      error => {
        console.log(error);

        this.snackBar.open(
          "login Failed",
          "undo",
          { duration: 2500 }
        )
      }
    )
  }
}
