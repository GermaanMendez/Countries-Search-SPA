import { Component } from '@angular/core';
import { CountiresService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  private countryService:CountiresService;
  public countriesList:Country[]=[];
  constructor(countryService : CountiresService){
    this.countryService=countryService;
  }

  searchByRegion(region:string){
    this.countryService.searchRegion(region).subscribe(countries=>this.countriesList=countries);
  }

}
