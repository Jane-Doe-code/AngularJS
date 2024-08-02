import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackLinkServiceService } from '../../service/back-link-service.service'
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  contactForm = {
    name: '',
    email: '',
    phone:'',
    message: ''
  };

  submitContactForm() {
    if (this.contactForm.name && this.contactForm.phone && this.contactForm.email && this.contactForm.message) {
      console.log('Form submitted', this.contactForm);
      alert('Your message has been sent successfully!');
      this.contactForm = { name: '', phone:'' ,email: '', message: '' };
    } else {
      alert('Please fill in all fields');
    }
   
    } 
    showBackLink:boolean=false;
    constructor(private backLinkService:BackLinkServiceService){}

  ngOnInit():void{
    this.showBackLink=this.backLinkService.getFromSpecficLink();
  }
}

