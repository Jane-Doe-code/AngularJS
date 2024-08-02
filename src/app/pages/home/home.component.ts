import { Component } from '@angular/core';
import { BackLinkServiceService } from '../../service/back-link-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private backLinkService:BackLinkServiceService){}
  setFromSpecficLink(){
    this.backLinkService.setFromSpecficLink(true);
  }
}
