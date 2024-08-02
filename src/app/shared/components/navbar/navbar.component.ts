import { Component } from '@angular/core';
import { BackLinkServiceService } from '../../../service/back-link-service.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private backLinkService :BackLinkServiceService){}
    setFromNavBar():void{
      this.backLinkService.setFromSpecficLink(false);
  }
  
  
}
