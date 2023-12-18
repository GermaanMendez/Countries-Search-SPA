import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountiresService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  private activatedRoute: ActivatedRoute;
  private countriesService: CountiresService;
  private router:Router

  constructor(activatedRoute: ActivatedRoute, countriesService:CountiresService,router:Router) {
    this.activatedRoute = activatedRoute;
    this.countriesService = countriesService;
    this.router=router
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.searchCountry(id);
    });
  }

  searchCountry(code: string) {
    this.countriesService.searchCountryByAlhpaCode(code).subscribe(country => {
      if (!country) {
        return this.router.navigateByUrl('');
      }
      this.country = country;
      console.log(this.country)
      return;
    })
  }
}
