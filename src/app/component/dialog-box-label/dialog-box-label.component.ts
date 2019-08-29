import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatSnackBar, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { LabelService } from '../../core/service/label.service';
import { labelModel } from '../../core/model/labelModel';

@Component({
  selector: 'app-dialog-box-label',
  templateUrl: './dialog-box-label.component.html',
  styleUrls: ['./dialog-box-label.component.scss']
})

export class DialogBoxLabelComponent implements OnInit {
   @Input() labelData: any
   labels: any[];
   label: labelModel = new labelModel();

  constructor(
    private matSnackBar: MatSnackBar,
    private labelService: LabelService,
    public dialogBox: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
    this.getLabel();
  }

  /**
   * @description function to create a label
   */
  createlabel() 
  {
    this.labelService.createLabel(this.label).subscribe(
      (response: any) => {
        this.matSnackBar.open(
          "Label created Successfully",
          "undo",
          { duration: 2500 }
        )
      },
      (error) => {

        this.matSnackBar.open(
          "Label creation Failed",
          "undo",
          { duration: 2500 }
        )
      }
    )
  }

  /**
   * @description function to display all label
   */
  getLabel() {
    this.labelService.getLabel().subscribe(
      (response: any) => {
        this.labels = response.result
      }
    )
  }

  /**
   * @description function to delete a label
   */
  deleteLabel(label) {
    console.log(label._id);
    var data1 = 
    {
      "_id": label._id,
    }

    this.labelService.deleteLabel(label._id, data1).subscribe(
      (response: any) => {
          this.matSnackBar.open(
            "Label deleted Successfully",
            "undo",
            { duration: 2500 }
          )
        },
        error =>
        {
          this.matSnackBar.open(
            "Label deletion Failed",
            "undo",
            { duration: 2500 }
          )
        }
      )
    }

  /**
   * @description function to update a label
   */
  onEditLabel(label, data: any) {
    console.log("dataftd", data)
    console.log("Label is id" + data._id)
    console.log(label);
    var data1 = {
      "_id": data._id,
      "label": data.label
    }
    console.log("data1",data1)
    this.labelService.updateLabel(data._id, data1).subscribe(
      response => {
        console.log(response);
        this.matSnackBar.open(
          "Note is updated Successfully",
          "undo",
          { duration: 2500 }
        )
      },
      (err) => {
        this.matSnackBar.open(
          "Note is updation Failed",
          "undo")
        { duration: 2500 }
      }
    )
  }

}
