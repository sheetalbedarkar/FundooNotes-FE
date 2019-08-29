import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpService: HttpService) { }

  createNote(data)
  {
    var option = 
    {
      url : 'note/createNote',
      data : data
    }
    return this.httpService.postNote(option);
  }

  getAllNotes()
  {
    var option = 
    {
      url : 'note/getAllNotes'
    }
    return this.httpService.getNote(option);
  }

  updateNote(noteId, data)
  {
    var option = 
    {
      url : 'note/updateNote/' + noteId,
      data : data
    }
    return this.httpService.putRequest(option)
  }

  public trashNote(noteId, data)
  {
    var option = 
      {
        url : 'note/trashNote/' + noteId,
        data : data
      }
      return this.httpService.postNote(option)
  }

  public archiveNote(noteId, data)
  {
    var option = 
      {
        url : 'note/archiveNote/' + noteId,
        data : data
      }
      return this.httpService.postNote(option)
  }

  getAllTrashedNotes()
  {
    var option = 
    {
      url : 'note/getAllTrashNotes'
    }
    return this.httpService.getNote(option);
  }

  getAllArchiveNotes()
  {
    var option = 
    {
      url : 'note/getAllArchiveNotes'
    }
    return this.httpService.getNote(option);
  }

  deleteNote(noteId, data)
  {
    var option = 
    {
      url : 'note/deleteNote/' + noteId,
      data : data
    }
    return this.httpService.deleteNote(option);
  }

  postColor(data)
  {
    var option =
    {
      url : 'note/setColor',
      data : data
    }
    return this.httpService.putRequest(option)
  }

  setReminder(noteId, data)
  {
    var option = 
    {
      url : 'note/reminderNote/' + noteId,
      data : data
    }
    return this.httpService.postNote(option)
  }

  deleteReminder(data)
  {
    var option = 
    {
      url : 'note/deleteReminder',
      data : data
    }
    return this.httpService.putRequest(option)
  }

  getAllRemainderNotes()
  {
    var option = 
    {
      url : 'note/getAllRemainderNotes'
    }
    return this.httpService.getNote(option)
  }

  searchTitle(data)
  {
    var option = 
    {
      url : 'note/searchNoteWithTitle',
      data : data
    }
    return this.httpService.getNote(option)
  }

}

