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
  private flag: Boolean = false;
  toggle: boolean = true;
note : noteModel = new noteModel();

  constructor(
    private snackBar: MatSnackBar, 
    private noteService: NoteService
  ) { }

  ngOnInit() {
  }

  addNote()
  {
    console.log("Notes :::::",this.note)
    if (this.note.title != null) {
      this.noteService.createNote('note/createNote',this.note).subscribe(
        (response: any) => {
          console.log(response);
          this.snackBar.open(
            "Note is created Successfully", "",
            { duration: 2500 }
          )

        }

      )
    }
    else {
      this.snackBar.open(
        "empty title & decription note is not created", "",
        { duration: 2500 });
    }
  }

  show() {
    this.flag = !this.flag;
  }

  onPopup() {
    this.popup = true;
  }

}
