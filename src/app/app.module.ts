import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropDemoComponent } from './drag-drop-demo/drag-drop-demo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  declarations: [AppComponent, HelloComponent, DragDropDemoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
