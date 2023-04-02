import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomButtonModule} from "../../projects/tutorial-lib/src/lib/custom-button/custom-button.module";
import {CustomButtonService} from "./button-configuration.service";

export const CUSTOM_BUTTON_CONFIG = new InjectionToken<CustomButtonService>('CustomButtonService')
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomButtonModule.forRoot(CUSTOM_BUTTON_CONFIG)
  ],
  providers: [
    CustomButtonService,
    {
      provide: CUSTOM_BUTTON_CONFIG,
      useExisting: CustomButtonService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
