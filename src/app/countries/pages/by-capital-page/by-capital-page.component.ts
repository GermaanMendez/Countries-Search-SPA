import { Component } from '@angular/core';
import { CountiresService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {
  public countriesList:Country[]=[];
  public countriesService:CountiresService;

  constructor(countiresService : CountiresService){
    this.countriesService=countiresService;
  }

  searchByCapital(searchValue:string):void{
    this.countriesService.searchCapital(searchValue)
    .subscribe(countries=>{
      this.countriesList=countries;
    });
    
  }

}
