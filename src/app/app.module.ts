import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageComponentComponent } from './components/image-component/image-component.component';
import { InputComponentComponent } from './components/form-component/input-component/input-component.component';
import { ListComponentComponent } from './components/form-component/list-component/list-component.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponentComponent,
    InputComponentComponent,
    ListComponentComponent,
    FormComponentComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
