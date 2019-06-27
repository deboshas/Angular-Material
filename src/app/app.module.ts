import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialougeOverviewExampleComponent } from './dialouge-overview-example/dialouge-overview-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DialougeOverviewExampleComponent
  ],
  entryComponents: [DialougeOverviewExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [MatDialog,],
  bootstrap: [AppComponent]
})
export class AppModule { }
