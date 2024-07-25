import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component'; // Import FooterComponent
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ContactUsComponent,
    ResetPasswordComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
