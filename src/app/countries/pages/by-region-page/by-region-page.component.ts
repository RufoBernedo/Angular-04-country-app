import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  @Input()
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService){}

  public searchByRegion(region: string){
    this.countriesService.searchByRegion(region)
      .subscribe( countries => this.countries = countries )
  }

}
