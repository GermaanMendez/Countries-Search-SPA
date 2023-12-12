import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CountiresService {
    
    private apiURL:string='https://restcountries.com/v3.1'
    private httpClient:HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient=httpClient;
     }
    
     searchCapital(query:string):Observable<Country[]>{
        return this.httpClient.get<Country[]>(`${this.apiURL}/capital/${query}`)
                .pipe(
                    //Si ocurre un error retorna un obsersable que es un arreglo vacio
                    //of es de rjx que me permite crear facilmente un observable
                    catchError(error =>{console.log(error); return of([])})
                );
    
    }

    searchCountry(query:string):Observable<Country[]>{
        return this.httpClient.get<Country[]>(`${this.apiURL}/name/${query}`)
                .pipe(
                    catchError(error =>{console.log(error); return of([])})
                );
    
    }
    searchRegion(query:string):Observable<Country[]>{
        return this.httpClient.get<Country[]>(`${this.apiURL}/region/${query}`)
                .pipe(
                    catchError(error =>{console.log(error); return of([])})
                );
    
    }


    
}