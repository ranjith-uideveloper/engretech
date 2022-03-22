import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { EngineeringServicesComponent } from './components/engineering-services/engineering-services.component';
import { HomeComponent } from './components/home/home.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { OtherServicesComponent } from './components/other-services/other-services.component';
import { ServicesComponent } from './components/services/services.component';
import { ToolsMethodologiesComponent } from './components/tools-methodologies/tools-methodologies.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'industries',component:IndustriesComponent
  },
  {
    path:'careers',component:CareersComponent
  },
  {
    path:'other-services',component:OtherServicesComponent
  },
  {
    path:'tools-methodologies',component:ToolsMethodologiesComponent
  },
  {
    path:'engineering-services',component:EngineeringServicesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }



