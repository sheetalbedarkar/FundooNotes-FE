import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../core/model/userModel'
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  getErrorMessage = '';
  user: UserModel = new UserModel();
  firstname = new FormControl(this.user.firstname, [Validators.required])
  lastname = new FormControl(this.user.lastname, [Validators.required])
  email = new FormControl(this.user.email, [Validators.required, Validators.pattern('^[a-zA-Z0-9._]+@[a-zA-Z]+.[a-zA-Z]+$')])
  password = new FormControl(this.user.password, [Validators.required, Validators.minLength(6)])
  cpassword = new FormControl(this.user.cpassword, [Validators.required, Validators.minLength(6)])
  
  constructor(public formBuilder: FormBuilder, 
    private snackBar: MatSnackBar, 
    private route: ActivatedRoute, 
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  firstNameError() {
    return this.firstname.hasError('required') ? 'First Name is require' : '';
  }

  lastNameError() {
    return this.lastname.hasError('required') ? 'Last Name is require' : '';
  }

  emailError() {
    return this.email.hasError('required') ? 'Email Id is require' :
      this.email.hasError('pattern') ? 'Email Id is Invalid, please recheck once' : '';
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
 * @description onSubmit function to register the user
 */  
  register() {
    this.user={
      firstname:this.firstname.value,
      lastname:this.lastname.value,
      email:this.email.value,
      password:this.password.value,
      cpassword:this.cpassword.value
    }
    
      if (this.firstname.value == '' && this.lastname.value == '' && this.cpassword.value == '' && this.email.value == '' && this.password.value == '') {
        this.getErrorMessage = "Fields are required";
        return;
      } 
      if (this.password.value != this.cpassword.value) {
        this.getErrorMessage = "Password and Confirm Password not Matching";
        return;
      }
      this.userService.register(this.user).subscribe(
        response => 
        {
          this.snackBar.open(
            'Registration Successful', 
            'End now', 
            { duration: 1000 });
          this.router.navigateByUrl('login');
        },

        error => 
        {
          this.snackBar.open(
            "Registration Failed",
            "undo",
            { duration: 2500 }
          )
        }
      )
  }
}
