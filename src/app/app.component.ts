import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate = translate;
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
