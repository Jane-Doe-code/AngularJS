import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackLinkServiceService {
  private fromSpecficLink:boolean=false;

  setFromSpecficLink(value:boolean):void{
    this.fromSpecficLink=value;
  }

  getFromSpecficLink():boolean{
    return this.fromSpecficLink;
  }
}
