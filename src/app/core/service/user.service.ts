import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  register(data)
  {
    var option = 
    {
      url : 'register',
      data : data
    }
    return this.httpService.postReq(option);
  }

  verifyUser(token, data)
  {
    var option = 
    {
      url : 'isVerified/' + token,
      data : data
    }
    return this.httpService.postRequest(option);
  }

  login(data) 
  {console.log(" data in usre",data);
  
    var option = 
    {
      url: 'login',
      data: data
    }
    console.log("option",option);
    return this.httpService.postReq(option);
  }

  forgetPassword(data)
  {
    var option = 
    {
      url: 'forgetPassword',
      data : data
    }
    return this.httpService.postReq(option);
  }

  resetPassword(token, data)
  {
    var option = 
    {
      url : 'resetPassword/' + token,
      data : data
    }
    return this.httpService.postRequest(option);
  }

}
