import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/restcountries';
import { ActivatedRoute } from '@angular/router';
import { Region, regions } from '../../interfaces/regions';
import { RestcountriesService } from '../../services/restcountries.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  region: Region | undefined;

  selectedRegion: string = '';

  countries: Country[] = [];

  searchTerm: string = ''

  constructor(private restcountriesService: RestcountriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

  const routeParams = this.route.snapshot.paramMap;
  const regionIdFromRoute = Number(routeParams.get('regionId'));
  this.region = regions.find(region => region.id === regionIdFromRoute);
    

  let reg: string = '';

  if (regionIdFromRoute === 1){
    reg = 'africa'
  }
  else if (regionIdFromRoute === 2){
    reg = 'america'
  }
  else if (regionIdFromRoute === 3){
    reg = 'asia'
  }
  else if (regionIdFromRoute === 4){
    reg = 'europe'
  }
  else{
    reg = 'oceania'
  }

  this.selectedRegion = reg;

  this.restcountriesService.getCountriesByRegion(this.selectedRegion).subscribe( {
    next: (reg) => { 
      this.countries = reg;
    },
    complete: () => console.info('complete') 
  });

  }
  
}
