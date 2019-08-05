import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/core/service/note.service';
import { noteModel } from '../../core/model/noteModel';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../../component/dialog-box/dialog-box.component';
import { LabelService } from '../../core/service/label.service';
import { ViewService } from '../../core/service/view.service';
@Component({
  selector: 'app-get-note',
  templateUrl: './get-note.component.html',
  styleUrls: ['./get-note.component.scss']
})
export class GetNoteComponent implements OnInit {
  @Input() noteData: any
  public dialogRef: any
  note: noteModel = new noteModel();
  date: Date = new Date();
  notes: any[];
  trash: Boolean;
  isArchive: Boolean;
  labels: any[];
  color: any[];
  views: any;
  allign: string = '';
  // wrap:string='wrap';
  direction1: string = 'wrap';

  direction: string = "row";
  res1: unknown;

  constructor(
    private snackBar: MatSnackBar,
    private noteService: NoteService,
    public matDialog: MatDialog,
    private view: ViewService,
    private labelService: LabelService,

  ) { }

  ngOnInit() {
    this.getNote();
    this.getLabel();
    this.view.getView().subscribe(

      (res) => {
        this.views = res;
        this.direction = this.views.data;
        if (this.direction == 'row') {
          this.direction1 = 'wrap';
          this.allign = ''
          console.log("wrap", this.direction1);
          // this.searchText=this.masterName

        }
        else {
          this.direction1 = ''
          this.allign = 'center'
          console.log("no wrap", this.direction1);
          // this.searchText=this.masterName
        }
        // this.toggle=this.views.data1;
        console.log(this.direction);
      });
  }

  colorCodes =
    [
      [
        { name: "white", hexcode: "#ffffff" },
        { name: "lightGreen", hexcode: "#ccff8f" },
        { name: "purple", hexcode: "#d8aefb" },
        { name: "red", hexcode: "#f28b82" },
      ],
      [
        { name: "Teal", hexcode: "#a7feeb" },
        { name: "pink", hexcode: "#fdcfe8" },
        { name: "orange", hexcode: "#fbbd03" },
        { name: "blue", hexcode: "#cbf0f8" },
      ],
      [
        { name: "brown", hexcode: "#e6c9a8" },
        { name: "yellow", hexcode: "#fff474" },
        { name: "darkBlue", hexcode: "#aecbfa" },
        { name: "gray", hexcode: "#e8eaed" }
      ]
    ]

  /**
   * function to display all notes
   */
  getNote() {
    this.noteService.getAllNotes('note/getAllNotes').subscribe(
      (response: any) => {
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
  trashNote(items, $event) {
    this.trash = $event
    var data = {
      "isTrash": true,
      "id": items._id
    }
    console.log("TRASHNOTE noteId :::::::", data)
    this.noteService.trashNote('note/trashNote/' + items.id, data).subscribe(
      (response: any) => {
        this.snackBar.open(
          "Note moved to trash",
          "undo",
          { duration: 2500 }
        )
      },
      (error: any) => {
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
  onArchive(items, $event) {
    this.isArchive = $event
    var data = {
      "isArchive": true,
      "id": items._id
    }
    console.log("isArchive noteId :::::::", data)
    this.noteService.archiveNote('note/archiveNote/' + items.id, data).subscribe(
      (response: any) => {
        this.snackBar.open(
          "Note is archived",
          "undo",
          { duration: 2500 }
        )
      },
      (error: any) => {
        this.snackBar.open(
          "Notes archived failed",
          "undo",
        )
      }
    )
  }


  getLabel() {
    this.labelService.getLabel('label/getLabel').subscribe(
      (response: any) => {
        console.log("RESPONSE ::::::::", response)
        this.labels = response.result
      }
    )
  }


  addLabel(labels, items) {
    console.log("Add Label to Note");
    console.log("NoteId", items);
    console.log("labelId", labels);
    var data = {
      "id": items._id,
      "label": labels[0]._id
    }
    console.log("data ::::", data)
    this.labelService.addLabel("note/addLabel", data).subscribe(
      (response: any) => {

        console.log("label is added to note");
        this.snackBar.open(
          "label is added to note successfully",
          "undo",
          { duration: 2500 }
        )
      },
      error => {
        console.log("label add failed");
        this.snackBar.open(
          "label addtion failed",
          "undo",
          { duration: 2500 }
        )
      }
    )
  }


  changeColor(color, items) {
    console.log("items", items)
    // this.color = $event
    console.log("get color", color);
    var data = {
      "color": color,
      "id": items._id
    }
    console.log("jdfdhfhd", data);

    this.noteService.postColor('note/setColor', data).subscribe(
      (response: any) => {
        console.log(response);

        this.getNote();
        this.snackBar.open(
          'note color updated Successfully..',
          'End now',
          { duration: 1000 });

      },
      error => {
        console.log(error);
        this.snackBar.open(
          'note color not updated',
          'End now',
          { duration: 1000 });
      })
  }

  setToday(data) {

    console.log(data);
    console.log("Todays date is been set ")
    const date = new Date().toDateString();
    console.log("Date added:" + date)
    let reminderDate = date + ' 08:00:00';
    console.log('in reminder1==>', reminderDate);
    let data1 = 
    {
      "_id" : data._id,
      "reminder" : reminderDate
    }
    this.noteService.setReminder("note/reminderNote/" + data1._id, data1).subscribe(
      (response: any) => 
      {
        console.log("Note is remaindered successfully")
      })


  }

  setTomorrow(data) {
    console.log(data);
    console.log("Tomorrow date is been set ")
    //var date = new Date();

    this.date.setDate(this.date.getDate() + 1);
    console.log(this.date.toString());
    var data1 =
    {
      "_id" : data._id,
      "reminder" : this.date
    }
    this.noteService.setReminder("note/reminderNote/" + data1._id, data1).subscribe(
      (response: any) => 
      {
        console.log("Note is reminder successful");
        console.log(response)
      }
    )
  }


  setWeekly(data) 
  {
    console.log(data.noteId);
    console.log("After week date is been set ")
    this.date.setDate(this.date.getDate() + 7);
    console.log(this.date.toString());
    var data1 =
    {
      "_id" : data._id,
      "reminder" : this.date
    }
    this.noteService.setReminder("note/reminderNote/" + data1._id, data1).subscribe(
      (response: any) => 
      {
        console.log("Note is reminder successful");
        console.log(response)
      }
    )
  }

  deleteReminder(items)
  {
    var data1 =
    {
      "_id" : items._id,
    }
    console.log("data1",data1)
    this.noteService.deleteReminder("note/deleteReminder", data1).subscribe(
      (response: any) => 
      {
        console.log("reminder is deleted successful");
        console.log(response)
      }
    )
  }
}
