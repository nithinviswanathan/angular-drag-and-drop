import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DraggableComponent } from './draggable.component';
import { DraggableItemComponent } from './draggable.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, DraggableComponent, DraggableItemComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
