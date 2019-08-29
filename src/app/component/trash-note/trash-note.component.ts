import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/core/service/note.service';
import { noteModel } from '../../core/model/noteModel';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})

export class TrashNoteComponent implements OnInit {
  @Input() noteData: any
  note: noteModel = new noteModel();
  notes: any[];
  trash: boolean
  constructor(
    private snackBar: MatSnackBar,
    private noteService: NoteService,
    public matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.getAllTrashedNotes();
  }

  /**
   * @description function to get all trashed notes
   */
  getAllTrashedNotes() {
    // console.log("DATA :::::::",this.data)
    this.noteService.getAllTrashedNotes().subscribe(
      (response: any) => {
        console.log(response);
        //this.note = response;
        this.notes = response.result
      })
  }

  /**
   * @description function to delete note permenantly 
   * @param items 
   */
  deleteNote(items) {
    console.log("note delete permanently");
    console.log("Note ID" + items._id);
    var data =
    {
      "_id": items._id
    }

    this.noteService.deleteNote(items._id, data).subscribe(

      (response: any) => {
        console.log("hello");
        this.snackBar.open(
          "Note deleted Successfully",
          "undo",
          { duration: 2500 }
        )
      },
      (error: any) => {
        this.snackBar.open(
          "Notes deletion  failed",
          "undo",
        )
      }


    )
  }

  /**
    * @description onClick function for trash note
    * @param items 
    * @param $event 
    */
  trashNote(items) {
    var data = {
      "isTrash": true,
      "id": items._id
    }
    console.log("TRASHNOTE noteId :::::::", data)
    this.noteService.trashNote(data.id, data).subscribe(

      (response: any) => {

        this.snackBar.open(
          "Note untrash",
          "undo",
          { duration: 2500 }
        )

      },
      (error: any) => {
        this.snackBar.open(
          "Notes untrash failed",
          "undo",
        )
      }
    )
  }

}
