import { Component, } from '@angular/core';
import { HeaderInfo } from './header.info';
import { getHeaderInfo } from './header.info';

@Component({
  selector: 'sirea-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerInfo: HeaderInfo;

  constructor() {
    this.headerInfo = getHeaderInfo(); // obtém informações estáticas do header
  }
}

