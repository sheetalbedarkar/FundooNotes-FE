import { Component, OnInit, Inject } from '@angular/core';
import { NoteService } from 'src/app/core/service/note.service';
import { noteModel } from '../../core/model/noteModel';
import { MatSnackBar} from '@angular/material';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit {

  note : noteModel = new noteModel();

  constructor(
    private snackBar: MatSnackBar, 
    private noteService: NoteService,
    public matDialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) { }

  ngOnInit() {
  }

  getAllTrashedNotes() {
    this.noteService.getTrash('note/getAllTrashNotes').subscribe((response: any) => {

      console.log(response);
      this.note = response;
    })
  }

  
}
