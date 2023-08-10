import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MyNewLibModule} from "my-new-lib";
import {CustomButtonModule} from "../../projects/my-new-lib/src/lib/custom-button/custom-button.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
