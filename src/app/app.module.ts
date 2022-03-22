import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionComponent } from './components/section/section.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { CareersComponent } from './components/careers/careers.component';
import { OtherServicesComponent } from './components/other-services/other-services.component';
import { ToolsMethodologiesComponent } from './components/tools-methodologies/tools-methodologies.component';
import { EngineeringServicesComponent } from './components/engineering-services/engineering-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    IndustriesComponent,
    CareersComponent,
    OtherServicesComponent,
    ToolsMethodologiesComponent,
    EngineeringServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
