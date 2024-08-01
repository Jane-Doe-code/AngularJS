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
import { FooterComponent } from './shared/components/footer/footer.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
<<<<<<< HEAD
<<<<<<< HEAD
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

=======
=======
>>>>>>> 1b32a0f691098e3ac2c74d872c1c065ceb9cc642
//
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { DocumentComponent } from './shared/components/document/document.component';
// import {provideNativeDateAdapter} from '@angular/material/core';
<<<<<<< HEAD
>>>>>>> 1b32a0f691098e3ac2c74d872c1c065ceb9cc642
=======
>>>>>>> 1b32a0f691098e3ac2c74d872c1c065ceb9cc642
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
    FooterComponent,
    DocumentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    //
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    // provideNativeDateAdapter,
<<<<<<< HEAD
  ],
  providers: [
    provideAnimationsAsync()
=======
>>>>>>> 1b32a0f691098e3ac2c74d872c1c065ceb9cc642
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
