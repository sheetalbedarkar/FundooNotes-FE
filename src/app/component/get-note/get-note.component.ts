import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/core/service/note.service';
import { noteModel } from '../../core/model/noteModel';
import { MatSnackBar} from '@angular/material';
import { MatDialog} from '@angular/material/dialog';
import { DialogBoxComponent } from '../../component/dialog-box/dialog-box.component';

@Component({
  selector: 'app-get-note',
  templateUrl: './get-note.component.html',
  styleUrls: ['./get-note.component.scss']
})
export class GetNoteComponent implements OnInit {
  @Input() noteData : any
  public dialogRef : any
  note : noteModel = new noteModel();
  notes : any[];
  trash : Boolean;
  isArchive : Boolean;
  constructor(
    private snackBar: MatSnackBar, 
    private noteService: NoteService,
    public matDialog : MatDialog,
  ) { }

  ngOnInit() {
    this.getNote();
  }

  colorCodes =
    [
      [
        { name: "white", hexcode: "#ffffff" },
        { name: "lightGreen", hexcode: "#f28b82" },
        { name: "purple", hexcode: "#f7bc04" },
        { name: "red", hexcode: "#faf474" },
      ],
      [
        { name: "Teal", hexcode: "#cbff90" },
        { name: "pink", hexcode: "#a7ffeb" },
        { name: "orange", hexcode: "#cbf0f8" },
        { name: "blue", hexcode: "#adcbfa" },
      ],
      [
        { name: "brown", hexcode: "#d7aefb" },
        { name: "yellow", hexcode: "#fdcfe8" },
        { name: "darkBlue", hexcode: "#cbb294" },
        { name: "gray", hexcode: "#e8eaed" }
      ]
    ]

/**
 * function to display all notes
 */
    getNote()
    {
        this.noteService.getAllNotes('note/getAllNotes').subscribe(
          (response : any)=> 
          {
            this.notes = response.result
          }
        )
    }

    /**
     * Open Dialoge box function to edit note
     * @param items
     */
    openDialog(items: any) {
      const dialogRef = this.matDialog.open(DialogBoxComponent, {
        width: '500px', height: '190px',
        data: {
          title: items.title,
          content: items.content,
          noteId: items._id
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`dialog result:${result}`);
      });
  
    }
    
    /**
     * onClick function for trash note
     * @param items 
     * @param $event 
     */
    trashNote(items,$event) {
      this.trash = $event
      var data = {
        "isTrash" : true,
        "id" : items._id
      }
      console.log("TRASHNOTE noteId :::::::",data)
      this.noteService.trashNote('note/trashNote/'+items.id,data).subscribe(
  
        (response: any) => {
          
            this.snackBar.open(
              "Note moved to trash",
              "undo",
              { duration: 2500 }
            )
  
          },
          (error: any) =>
          {
            this.snackBar.open(
              "Notes trash  failed",
              "undo",
            )
            }
       
      )
    }

    /**
     * onClick function to archive note
     * @param items 
     * @param $event 
     */
    onArchive(items,$event) {
      this.isArchive = $event
      var data = {
        "isArchive" : true,
        "id" : items._id
      }
      console.log("isArchive noteId :::::::",data)
      this.noteService.archiveNote('note/archiveNote/'+items.id,data).subscribe(
  
        (response: any) => {
          
            this.snackBar.open(
              "Note is archived",
              "undo",
              { duration: 2500 }
            )
  
          },
          (error: any) =>
          {
            this.snackBar.open(
              "Notes archived failed",
              "undo",
            )
            }
       
      )
    }

}
