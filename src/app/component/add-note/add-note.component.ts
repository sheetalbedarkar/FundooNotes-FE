import { Component, OnInit } from '@angular/core';
import { noteModel } from '../../core/model/noteModel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/core/service/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})

export class AddNoteComponent implements OnInit {
  private popup: boolean;
note : noteModel = new noteModel();

  constructor(
    private snackBar: MatSnackBar, 
    private noteService: NoteService
  ) { }

  ngOnInit() {
  }
  
/** 
 * @description Onclick function for add Note
 */
  addNote()
  {
    this.popup = false;
    if (this.note.title != null) {
      this.noteService.createNote(this.note).subscribe(
        (response: any) => {
          this.snackBar.open(
            "Note is created Successfully", "",
            { duration: 2500 }
          )
        }
      )
    }
  }

  onPopup() {
    this.popup = true;
  }

}
