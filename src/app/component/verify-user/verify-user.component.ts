import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../core/model/userModel'
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/core/service/user.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.scss']
})
export class VerifyUserComponent implements OnInit {
  verifyUser: UserModel = new UserModel();
  token: String
  data: string;
  constructor(public formBuilder: FormBuilder, 
    private userService: UserService,
    private route: ActivatedRoute) { }
  accesstoken = this.route.snapshot.paramMap.get('token')

  ngOnInit() {
    this.data = "";
    localStorage.setItem('token', this.accesstoken)
    this.userService.verifyUser('isVerified/' + this.accesstoken, this.data).subscribe(
      response => 
      {
        console.log(response);
      },
      error => 
      {
        console.log(error);
      }
    )
  }
}