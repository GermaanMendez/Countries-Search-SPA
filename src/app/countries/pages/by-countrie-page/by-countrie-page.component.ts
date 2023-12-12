import { Component, OnInit } from '@angular/core';
import { CountiresService } from '../../services/countries.service';
import { Country, PostalCode } from '../../interfaces/country';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-by-countrie-page',
  templateUrl: './by-countrie-page.component.html',
  styles: ``
})
export class ByCountriePageComponent implements OnInit{

  private countryService:CountiresService;
  private activatedRoute:ActivatedRoute;
  public countriesList:Country[]=[];

  constructor(activatedRoute:ActivatedRoute,countrieService:CountiresService){
    this.countryService=countrieService;
    this.activatedRoute=activatedRoute;
  }

  //Esta clase de angular me permite trabajar con los parametros que hay en la URL
  //En mi caso tengo el id ya que en el routing declare que una ruta tendra un parametro llamado id
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any)=>{
      console.log({params:params.id})
    })
  }

  searchByCountry(country:string){
    this.countryService.searchCountry(country).subscribe(countries=>this.countriesList=countries)
  }

}
