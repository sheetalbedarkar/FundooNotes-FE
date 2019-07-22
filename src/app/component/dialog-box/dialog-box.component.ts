import { Component, OnInit , Inject, Input} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from '../../core/service/note.service'

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit 
{
@Input() noteData : any
  constructor(private snackBar : MatSnackBar, 
    public dialogBox : MatDialog,
    private noteService : NoteService,
    @Inject(MAT_DIALOG_DATA) public data : any) { }

title = new FormControl(this.data.title);
content = new FormControl(this.data.content);
noteId = this.data.noteId

  ngOnInit() {
  }
  onClose() 
  {
    this.dialogBox.closeAll();    
    var data1= {
        "_id" :  this.noteId,
        "title" : this.title.value,
        "content" : this.content.value
    }

    this.noteService.updateNote('note/updateNote/'+this.data.noteId,data1).subscribe(
      (res: any) => 
      {
        this.snackBar.open(
        "Notes are updated successfully",
        "undo",
        { duration: 2500 }
        )
      },
      (err)=>{
        this.snackBar.open(
        "Notes not updated",
        "undo",
        { duration: 2500 }
       
    )
        })
  }
}
