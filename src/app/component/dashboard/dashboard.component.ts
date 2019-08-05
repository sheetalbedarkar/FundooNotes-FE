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
    private view:ViewService) { }

    noteData: noteModel = new noteModel();
  notes: any[];
  labels: any[];
  value:boolean=true;

  ngOnInit() {
    this.getLabel();
  }

  firstName = localStorage.getItem("firstName");
  lastName = localStorage.getItem("lastName");
  email = localStorage.getItem("email");

  /** 
   * logout function to clear localStroage
   */
  logout() {
    localStorage.clear()
  }

  note() {
    this.router.navigate(['dashboard', 'getAllNotes']);
  }

  archive() {
    this.router.navigate(['dashboard', 'getAllArchiveNotes']);
  }

  trash() {
    this.router.navigate(['dashboard', 'getAllTrashNotes']);
  }

  remainder()
  {
    this.router.navigate(['dashboard', 'getAllRemainderNotes'])
  }

  refresh(): void {
    window.location.reload();
  }

  getLabel() {
    this.labelService.getLabel('label/getLabel').subscribe(
      (response: any) => {
        console.log("RESPONSE ::::::::", response)
        this.labels = response.result
      }
    )
  }

  opendialogLabel(items) {

    // console.log("ITEMS ::::::",labels)
    const dialogRef = this.dialog.open(DialogBoxLabelComponent,
      {

        width: '500px',
        // height: '190px',
        // data: {
        //   label: label.label,
        //   _id: label._id
        // }
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`dialog result:${result}`);
    });

  }
  toggle(){
  this.value=false;
  this.view.gridview(this.value);
  }
  toggle1(){
    this.value=true;
    this.view.gridview(this.toggle);
      }

      onSearchChange(title: string) {
       var obj={
        "title"  : title
        }
        console.log("search is message that:" , title)
  this.noteService.searchTitle("note/searchNoteWithTitle", obj.title).subscribe(
        (response: any) => {
        
        this.notes = response;
        console.log("response is", response);
        this.router.navigate(['/dashboard']);
        }
        );
        }
}
