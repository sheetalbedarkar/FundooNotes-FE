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
}
