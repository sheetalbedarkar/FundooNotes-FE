import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpService: HttpService) { }

  createNote(url, data)
  {
    var option = 
    {
      url : url,
      data : data
    }
    return this.httpService.postNote(option);
  }

  getAllNotes(url)
  {
    var option = 
    {
      url : url
    }
    return this.httpService.getNote(option);
  }

  updateNote(url, data)
  {
    var option = 
    {
      url : url,
      data : data
    }
    return this.httpService.putRequest(option)
  }

  permenantlyDeleteNote(url)
  {
    var option = 
    {
      url : url
    }
    return this.httpService.deleteRequest(option)
  }

  public trashNote(url, data)
  {
    var option = 
      {
        url : url,
        data : data
      }
      return this.httpService.postNote(option)
  }

  public archiveNote(url, data)
  {
    var option = 
      {
        url : url,
        data : data
      }
      return this.httpService.postNote(option)
  }

  getTrash(url)
  {
    var option = 
    {
      url : url
    }
    return this.httpService.getNote(option);
  }

}

