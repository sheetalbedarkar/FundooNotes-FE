import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private httpService: HttpService) { }

  createLabel(url, data)
  {
    var option = 
    {
      url : url,
      data : data
    }
    return this.httpService.postNote(option);
  }

  getLabel(url)
  {
    var option = 
    {
      url : url
    }
    return this.httpService.getNote(option)
  }

  updateLabel(url, data)
  {
    var option = 
    {
      url : url,
      data : data
    }
    return this.httpService.putRequest(option)
  }

  deleteLabel(url, data)
  {
    var option = 
    {
      url : url,
      data : data
    }
    return this.httpService.putRequest(option)
  }

  addLabel(url, data)
  {
    var option = 
    {
      url : url,
      data : data
    }
    return this.httpService.putRequest(option)
  }

}
