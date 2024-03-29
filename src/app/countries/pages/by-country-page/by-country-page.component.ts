import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {


  @Input()
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService){}

  public searchByCountry(country: string){
    this.countriesService.searchByCountry(country)
      .subscribe( countries => this.countries = countries)
  }



}
