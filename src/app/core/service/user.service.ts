import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  register(url, data)
  {
    var option = 
    {
      url : url,
      data : data
    }
    return this.httpService.postReq(option);
  }

  verifyUser(url, data)
  {
    var option = 
    {
      url : url,
      data : data
    }
    return this.httpService.postRequest(option);
  }

  login(url, data) {
    var option = {
      url: url,
      data: data
    }
    console.log(option);
    
    return this.httpService.postReq(option);
  }

  forgetPassword(url, data)
  {
    var option = 
    {
      url: url,
      data : data
    }
    return this.httpService.postReq(option);
  }

  resetPassword(url, data)
  {
    var option = 
    {
      url : url,
      data : data
    }
    return this.httpService.postRequest(option);
  }

}
