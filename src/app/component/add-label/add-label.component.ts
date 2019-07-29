import { Component, OnInit, Input} from '@angular/core';
import { MatSnackBar,MatDialog } from '@angular/material';
import { DialogBoxLabelComponent } from '../../component/dialog-box-label/dialog-box-label.component';
import { NoteService } from '../../core/service/note.service';
import { LabelService } from '../../core/service/label.service';
import { labelModel } from '../../core/model/labelModel'; 

@Component({
  selector: 'app-add-label',
  templateUrl: './add-label.component.html',
  styleUrls: ['./add-label.component.scss']
})
export class AddLabelComponent implements OnInit {
  @Input() labeldata : any
 labels : any[];
  data: any[];
  public dialogRef : any
  label : labelModel = new labelModel();
  constructor(private matSnackBar : MatSnackBar, 
    private noteService : NoteService, 
    private labelService : LabelService,
    private dialog : MatDialog) { }

  ngOnInit() {
    this.getLabel();
  }

/**
 * function to display all label
 */
getLabel()
{
    this.labelService.getLabel('label/getLabel').subscribe(
      (response : any)=> 
      {
        console.log("RESPONSE ::::::::",response)
        this.labels = response.result
      }
    )
}

  opendialogLabel(): void {
    const dialogRef = this.dialog.open(DialogBoxLabelComponent,
      {
        width: '350px',
        height: '400px'
      });
    console.log("Dialog is created")
    dialogRef.afterClosed().subscribe(result => {
      console.log(`dialog result:${result}`);
    });
  }

  onEditLabel(labels) {

  console.log("DATA :::",labels);
  var label = 
  {
    "_id" : labels[0]._id
  }

    this.labelService.updateLabel('label/updateLabel',label).subscribe(
      response => {

        console.log("hjerfgjhaewvgfhjaw",response);
        this.matSnackBar.open(
          "Note is updated Successfully",
          "undo",
          { duration: 2500 }
        )
      },
      error =>
      {
        this.matSnackBar.open(
          "Note is updation Failed",
          "undo",
          { duration: 2500 }
        )
      }
  
    )
  }

  onDeleteLabel(labels) {
    var label = 
    {
      "_id" : labels[0]._id,
    }
    this.labelService.deleteLabel('label/deleteLabel',label).subscribe(
      response => {
     
        console.log("RESPONSE ::::",response);
        this.matSnackBar.open(
          "Note is deleted Successfully",
          "undo",
          { duration: 2500 }
        )
      },
      error =>
      {
        this.matSnackBar.open(
          "Note is delettion Failed",
          "undo",
          { duration: 2500 }
        )
        }
     )
  }

}
