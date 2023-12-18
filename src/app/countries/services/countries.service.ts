import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountiresService  {

    private apiURL:string='https://restcountries.com/v3.1'
    private httpClient: HttpClient;

    public cacheStore:CacheStore = {
      byCapital:   { term: '', countries: [] },
      byCountries: { term: '', countries: [] },
      byRegion :   { region: '', countries: [] }
    }

  constructor(httpClient: HttpClient) {
        this.loadToLocalStorage();
        this.httpClient=httpClient;
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore))
  }

  private loadToLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!)
  }

  private getCountriesRequest(url:string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        // delay(2000),
           );
  }

  // El método utiliza el operador pipe para encadenar operadores a la secuencia de observables resultante de la solicitud HTTP.
  // El operador map se utiliza para transformar la respuesta de la solicitud. En este caso, verifica si la longitud del array de países (countries) es mayor que cero. Si es así, devuelve el primer país encontrado (countries[0]), de lo contrario, devuelve null.
  //   El operador catchError se utiliza para manejar cualquier error que pueda ocurrir durante la solicitud. Si se produce un error, se devuelve un observable que emite null.
  searchCountryByAlhpaCode(code: string): Observable<Country | null> {
      const url = `${this.apiURL}/alpha/${code}`;
      return this.httpClient.get<Country[]>(url)
       .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
     }

  searchCapital(query: string): Observable<Country[]>{
       const url = `${this.apiURL}/capital/${query}`
        return this.getCountriesRequest(url)
          .pipe(
          //disparo un efecto secundario con tap sin afectar a la emsion original del observable
            tap(countries => this.cacheStore.byCapital = { term: query, countries: countries }),
            tap(() => this.saveToLocalStorage())
           );
    }

  searchCountry(query: string): Observable<Country[]>{
      const url = `${this.apiURL}/name/${query}`
      return this.getCountriesRequest(url)
        .pipe(
          tap(
            country => this.cacheStore.byCountries={term:query,countries:country}
          ),
          tap(() => this.saveToLocalStorage())
        );
  }

  searchRegion(query: Region): Observable<Country[]>{
      const url = `${this.apiURL}/region/${query}`
      return this.getCountriesRequest(url)
        .pipe(
          tap(
            countries => this.cacheStore.byRegion={region:query,countries:countries}
          ),
          tap(() => this.saveToLocalStorage())
      );
    }




}
