import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabelService } from '../../core/service/label.service';
import { MatDialog } from '@angular/material';
import { DialogBoxLabelComponent } from '../../component/dialog-box-label/dialog-box-label.component';
import { ViewService } from '../../core/service/view.service';
import { NoteService } from 'src/app/core/service/note.service';
import { noteModel } from '../../core/model/noteModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,
    private matDialog: MatDialog,
    private labelService: LabelService,
    private noteService: NoteService,
    private dialog: MatDialog,
    private view: ViewService) { }

  noteData: noteModel = new noteModel();
  notes: any[];
  labels: any[];
  value: boolean = true;

  ngOnInit() {
    this.getLabel();
  }

  firstName = localStorage.getItem("firstName");
  lastName = localStorage.getItem("lastName");
  email = localStorage.getItem("email");

  /** 
   * @description logout function to clear localStroage
   */
  logout() 
  {
    localStorage.clear()
  }

  /**
   * @description Routing from dashboard to get all notes
   */
  note() 
  {
    this.router.navigate(['u', 'notes']);
  }

  /**
   * @description Routing from dashboard to get all archive notes
   */
  archive() 
  {
    this.router.navigate(['u', 'archive']);
  }

  /**
   * @description Routing from dashboard to get all trash notes
   */
  trash() 
  {
    this.router.navigate(['u', 'trash']);
  }

  /**
   * @description Routing from dashboard to get all remainder notes
   */
  remainder() 
  {
    this.router.navigate(['u', 'remainder'])
  }

  /**
   * @description refresh the page
   */
  refresh(): void {
    window.location.reload();
  }

  /**
   * @description to get all labels
   */
  getLabel() {
    this.labelService.getLabel().subscribe(
      (response: any) => {
        console.log("RESPONSE ::::::::", response)
        this.labels = response.result
      }
    )
  }

  /**
   * @description dialog box to edit and delete label
   * @param items
   */
  opendialogLabel(items) {
    const dialogRef = this.dialog.open(DialogBoxLabelComponent,
      {
        width: '500px',
      }
    );
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  /**
   * @description toggle of list view
   */
  toggle() 
  {
    this.value = false;
    this.view.gridview(this.value);
  }

   /**
   * @description toggle of grid view
   */
  toggle1() 
  {
    this.value = true;
    this.view.gridview(this.toggle);
  }

  
  onSearchChange(title: string) {
    var obj = {
      "title": title
    }
    console.log("search is message that:", title)
    this.noteService.searchTitle(obj.title).subscribe(
      (response: any) => {
console.log("response",response)
        this.notes = response;
        console.log("response is", response);
        this.router.navigate(['/u']);
      }
    );
  
  }
  profile(){
    this.router.navigate(['/profile']);
  }
}
