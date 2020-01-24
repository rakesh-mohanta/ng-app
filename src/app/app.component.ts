import {  ChangeDetectionStrategy, Component } from '@angular/core';
import { NbIconConfig, NbComponentSize } from '@nebular/theme';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  disabledIconConfig: NbIconConfig = { icon: 'settings-2-outline', pack: 'eva' };
  title = 'ng-app';
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
}
