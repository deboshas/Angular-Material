import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialougeOverviewExampleComponent } from './dialouge-overview-example/dialouge-overview-example.component';
import { DialogData } from './dialouge-data';
import { observable } from 'rxjs';
import { timer } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isloading = false;
  title = 'Material';
  animal: string = "";
  name: string = "royal bengal";
  foods: any[];
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);



  constructor(public dialog: MatDialog) {
    this.foods = [

      { name: "ritu", value: 1 },
      { name: "debo", value: 2 },
      { name: "rai", value: 3 },
      { name: "rio", value: 4 },
      { name: "amal", value: 5 },
      { name: "mithu", value: 6 }
    ]
    this.isloading = true;

    this.getCourse().subscribe(x => this.isloading = false);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialougeOverviewExampleComponent, {
      width: '350px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.animal = result.animal;
    });
  }

  getCourse() {

    return timer(2000);


  }
}




