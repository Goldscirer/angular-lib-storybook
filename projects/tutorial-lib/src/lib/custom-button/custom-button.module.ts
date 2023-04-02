import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button.component';
import {ButtonConfigurationService} from "./button-configuration.service";

@NgModule({
  declarations: [
    CustomButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomButtonComponent,
  ],
})
export class CustomButtonModule {
  static forRoot(
    buttonConfiguration: InjectionToken<ButtonConfigurationService>
  ):ModuleWithProviders<CustomButtonModule> {
    return {
      ngModule: CustomButtonModule,
      providers: [
        {
          provide: ButtonConfigurationService,
          useExisting: buttonConfiguration,
        },
      ],
    };
  }
}
