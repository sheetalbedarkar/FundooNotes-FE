import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseUrl;
  url = environment.url;
  
  constructor(private http : HttpClient) { }

  public postRequest(options):any
  {
    const httpOptions = {
      headers: new HttpHeaders({
        //'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      })
    };

    return this.http.post(this.baseUrl + options.url, options.data,httpOptions)
  }

  public post(options):any
  {
    const httpOptions = {
      headers: new HttpHeaders({
        //'Content-Type': 'application/json',
        'token': localStorage.getItem('token1')
      })
    };

    return this.http.post(this.baseUrl + options.url, options.data,httpOptions)
  }

  public postNew(options):any
  {
    const httpOptions = {
      headers: new HttpHeaders({
        //'Content-Type': 'application/json',
        'token': localStorage.getItem('token1')
      })
    };

    return this.http.post(this.baseUrl + options.url, options.data,httpOptions)
  }

  public postReq(options):any
  {
    return this.http.post(this.baseUrl + options.url, options.data);
  }

  // public getRequest(url : any, data : any):any
  // {
  //   return this.http.get(this.baseUrl + url, data)
  // }

  public postNote(options):any
  {
    const httpOptions = {
      headers: new HttpHeaders({
        //'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      })
    }; 

    return this.http.post(this.url + options.url, options.data, httpOptions)
  }
}
