import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { HeaderBackComponent } from './components/header-back/header-back.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegionComponent } from './pages/region/region.component';
import { CountryComponent } from './pages/country/country.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderBackComponent,
    FooterComponent,
    RegionComponent,
    CountryComponent,
    CountryDetailsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RegionComponent,
    CountryComponent,
    CountryDetailsComponent
  ]
})
export class MyAppModule {}
