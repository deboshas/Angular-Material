import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../dialouge-data';




@Component({
  selector: 'app-dialouge-overview-example',
  templateUrl: './dialouge-overview-example.component.html',
  styleUrls: ['./dialouge-overview-example.component.css']
})
export class DialougeOverviewExampleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialougeOverviewExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }


  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
