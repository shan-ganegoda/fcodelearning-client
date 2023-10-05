import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  constructor(public dialogRef: MatDialogRef<MessageComponent>) {
  }

  ngOnInit(): void {
    this.dialogRef.addPanelClass('custom-dialog');
  }

  onNoClick(): void {
    this.dialogRef.close();

  }


}
