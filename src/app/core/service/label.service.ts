import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private httpService: HttpService) { }

  createLabel(data)
  {
    var option = 
    {
      url : 'label/createLabel',
      data : data
    }
    return this.httpService.postNote(option);
  }

  getLabel()
  {
    var option = 
    {
      url : 'label/getLabel'
    }
    return this.httpService.getNote(option)
  }

  updateLabel(noteId, data)
  {
    var option = 
    {
      url : 'label/updateLabel' + noteId,
      data : data
    }
    return this.httpService.putRequest(option)
  }

  deleteLabel(noteId, data)
  {
    var option = 
    {
      url : 'label/deleteLabel' + noteId,
      data : data
    }
    return this.httpService.putRequest(option)
  }

  addLabel(data)
  {
    var option = 
    {
      url : 'note/addLabel',
      data : data
    }
    return this.httpService.putRequest(option)
  }

}
