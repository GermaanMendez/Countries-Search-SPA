import { Component, OnInit } from '@angular/core';
import { CountiresService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {
  public countriesList:Country[]=[];
  public countriesService: CountiresService;
  public isLoading: boolean = false;
  public initialValueInput?: string;

  constructor(countiresService : CountiresService){
    this.countriesService=countiresService;
  }
  ngOnInit(): void {
    this.countriesList = this.countriesService.cacheStore.byCapital.countries;
    this.initialValueInput = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(searchValue: string): void{
    this.isLoading = true;
    this.countriesService.searchCapital(searchValue)
    .subscribe(countries=>{
      this.countriesList=countries;
      this.isLoading = false;
    });

  }

}
