import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/core/service/note.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})

export class RemainderComponent implements OnInit {
  notes: any[];
  constructor(
    private snackBar: MatSnackBar,
    private noteService: NoteService
  ) { }

  ngOnInit() {
    this.getAllRemainderNotes()
  }

  /**
   * @description get all remainder notes
   */
  getAllRemainderNotes() {
    this.noteService.getAllRemainderNotes().subscribe(
      (response: any) => 
      {
        console.log(response);
        this.notes = response.result
      }
    )
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
 * @description function to set color
 * @param color 
 * @param items 
 */
  changeColor(color, items) {
    var data = 
    {
      "color": color,
      "id": items._id
    }

    this.noteService.postColor(data).subscribe(
      (response: any) => {
        this.getAllRemainderNotes();
        this.snackBar.open(
          'note color updated Successfully..',
          'End now',
          { duration: 1000 });
      },
      error => 
      {
        console.log(error);
        this.snackBar.open(
          'note color not updated',
          'End now',
          { duration: 1000 });
      }
    )
  }
}
