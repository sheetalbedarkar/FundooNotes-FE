import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  baseUrl = environment.baseUrl;
  url = environment.url;

  isAuthenticated() 
  {
    return localStorage.getItem('userId')
  }
   private loggedInStatus = false

   setLoggedIn(value:boolean)
   {
     this.loggedInStatus = value;
   }
 
   get isLoggedIn()
   {
     return this.loggedInStatus
   }

  constructor(private http : HttpClient) { }

  public postRequest(options):any
  {
    const httpOptions = 
    {
      headers: new HttpHeaders({
        'token': localStorage.getItem('token')
      })
    };
    return this.http.post(this.baseUrl + options.url, options.data, httpOptions)
  }

  public postReq(options):any
  {
    console.log("options",this.baseUrl + options.url)
    return this.http.post(this.baseUrl + options.url, options.data);
  }

  public getNote(options):any
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'token': localStorage.getItem('token')
      })
    }; 
    return this.http.get(this.url + options.url, httpOptions)
  }

public putRequest(options):any
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'token': localStorage.getItem('token')
      })
    }; 
    return this.http.put(this.url + options.url, options.data, httpOptions)
  }
  public deleteRequest(options):any
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'token': localStorage.getItem('token')
      })
    }; 
    return this.http.delete(this.url + options.url, httpOptions)
  }

  public postNote(options):any
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'token': localStorage.getItem('token')
      })
    }; 

    return this.http.post(this.url + options.url, options.data, httpOptions)
  }

  public deleteNote(options):any
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'token': localStorage.getItem('token')
      })
    }; 
    return this.http.put(this.url + options.url,options.data, httpOptions)
  }
  
}