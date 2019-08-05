import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/core/service/note.service';
import { MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})
export class RemainderComponent implements OnInit {
  notes : any[];
  constructor(
    private snackBar: MatSnackBar, 
    private noteService: NoteService
  ) { }

  ngOnInit() {
    this.getAllRemainderNotes()
  }
  
  getAllRemainderNotes() {
    this.noteService.getAllRemainderNotes('note/getAllRemainderNotes').subscribe(
      (response: any) => 
      {
      console.log(response);
      //this.note = response;
      this.notes = response.result
    })
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

    

    changeColor(color, items) {
      console.log("items",items)
     // this.color = $event
      console.log("get color", color);
      var data = {
        "color": color,
        "id": items._id
      }
      console.log("jdfdhfhd", data);
  
      this.noteService.postColor('note/setColor',data).subscribe(
        (response: any) => {
          console.log(response);
         
          this.getAllRemainderNotes();
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
}
