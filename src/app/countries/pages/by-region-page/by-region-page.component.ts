import { Component, OnInit } from '@angular/core';
import { CountiresService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit{

  private countryService:CountiresService;
  public countriesList: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region;
  public isLoading: boolean=false;

  constructor(countryService: CountiresService) {
    this.countryService=countryService;
  }
  ngOnInit(): void {
    this.countriesList = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region): void {
    this.isLoading = true;
    this.selectedRegion = region;
    this.countryService.searchRegion(region).subscribe(countries => this.countriesList = countries);
    this.isLoading = false;
  }

}
