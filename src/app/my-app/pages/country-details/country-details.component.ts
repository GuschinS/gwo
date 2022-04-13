import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/restcountries';
import { RestcountriesService } from '../../services/restcountries.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  country!: Country;

  constructor(private activatedRoute: ActivatedRoute, private restcountriesService: RestcountriesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( params => this.restcountriesService.getCountryByCode(params['id']) ),
      tap(resp => console.log('tap',resp))
    )
    .subscribe( country => {
      this.country = country[0];
    });
  }

}
