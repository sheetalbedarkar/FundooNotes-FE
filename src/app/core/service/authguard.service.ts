import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpService } from 'src/app/core/service/http/http.service';
import { MatSnackBar } from '@angular/material';

@Injectable()

export class AuthguardService implements CanActivate {

  constructor(
    public httpService: HttpService,
    public router: Router,
    private snackBar: MatSnackBar) { }

  canActivate(): boolean {
    if (!this.httpService.isAuthenticated()) 
    {
      this.snackBar.open("sign in first", "", { duration: 2000 });
      this.router.navigate(['login']);
      return false;
    }
    else {
      this.snackBar.open("Welcome to dashboard", "", { duration: 2000 });
      return true;
    }

  }
}
