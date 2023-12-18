import { Component, OnInit } from '@angular/core';
import { CountiresService } from '../../services/countries.service';
import { Country, PostalCode } from '../../interfaces/country';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-by-countrie-page',
  templateUrl: './by-countrie-page.component.html',
  styles: ``
})
export class ByCountriePageComponent implements OnInit {

  private countryService:CountiresService;
  private activatedRoute: ActivatedRoute;
  public isLoading: boolean = false;
  public initialValueInput?: string;
  public countriesList: Country[] = [];


  constructor(activatedRoute:ActivatedRoute,countrieService:CountiresService){
    this.countryService=countrieService;
    this.activatedRoute=activatedRoute;
  }

  ngOnInit(): void {
    this.countriesList = this.countryService.cacheStore.byCountries.countries;
    this.initialValueInput = this.countryService.cacheStore.byCountries.term;
  }


  searchByCountry(country: string) {
    this.isLoading = true;
    this.countryService.searchCountry(country).subscribe(countries => {
      this.countriesList = countries
      this.isLoading = false;
    })

  }

}
