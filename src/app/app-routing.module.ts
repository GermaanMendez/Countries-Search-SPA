import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AboutPageComponent } from './shared/pages/aboutPage/aboutPage.component';
import { ContactPageComponent } from './shared/pages/contactPage/contactPage.component';
import { CountriesModule } from './countries/countries.module';

const routes: Routes=[
    // {
    //     path:'',
    //     component:HomePageComponent
    // },
    {
        path:'about',
        component:AboutPageComponent
    },
    {
        path:'contact',
        component:ContactPageComponent
    },
    {
        //Esto es para importar un router hijo en este caso importo el modulo que contiene al routing que tiene las rutas correspondientes a los paises
        //Este router es un router hijo ya que no es el general
        //debo usar esta sintaxis donde digo que voy a cargar un router hijo, que se encuentra en ese path y lo que voy a obtener es el countriesModule el cual dentro tiene al countries-routing module con las rutas correspondientes a los paises
        path:'countries',
        loadChildren:()=>import('./countries/countries.module').then(m=>m.CountriesModule)
    },
    {
        path:'**',
        redirectTo:'countries/by-country'
    }
];

@NgModule({

    imports:[
        RouterModule.forRoot(routes),
    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule { }
