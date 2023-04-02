import {Injectable} from "@angular/core";
import {
  ButtonConfiguration,
  ButtonConfigurationService
} from "../../projects/tutorial-lib/src/lib/custom-button/button-configuration.service";

@Injectable({
  providedIn: 'root'
})
export class CustomButtonService implements ButtonConfigurationService {
  getTranslations(): ButtonConfiguration {
    return {
      buttonName: 'Wyślij'
    };
  }
}
