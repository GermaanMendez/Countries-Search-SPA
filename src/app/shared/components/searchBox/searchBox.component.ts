
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl:'./searchBox.component.html',
  styleUrl: './searchBox.component.css',
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  //Observable Debouncer
  private debouncer: Subject<string> = new Subject<string>();
  //Suscripcion al evento que emite el Observable debouncer
  private debouncerSubscription?: Subscription;


  @Input()
  public initialValue?: string;

  @Input()
  public placeHolder:string='';

  @Output()
  public onValue:EventEmitter<string>=new EventEmitter();


  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  //El Debouncer es un Observable que en este caso recibe un valor, llega al pipe y si luego de 1 segundo no recibe otro valor emite el evento al que aca mismo me suscribo y mando a llamar a la funcion de busqueda
  //Cuando el usuairo deja de escribir en el input y pasa 1 segundo se ejecuta la funcion de busqueda dentro del suscribe
  ngOnInit(): void {
    //Creo la suscripcion al debouncer diciendo que es igual a la suscripcion al observable onDebaunce
    //Esto es ncesario para poder desuscribirme luego cuando el componente sea destruido
    this.debouncerSubscription=this.debouncer.pipe(debounceTime(600)).subscribe(value => {
      this.onDebounce.emit(value)
    })
  }

  //Se ejecuta cuando el componente es destruido, es por eso que aca me desuscribo de los eventos porque el componente ya va a ser destruido por lo tanto
  //debo desuscribirme para que no quede ese codigo colgado escuchando eventos cuando el componetne ya fue destruido
  ngOnDestroy(): void {
    //obtengo la suscripcion al observable debouncer y me desuscribo
    this.debouncerSubscription?.unsubscribe();
  }

  public emitSearch(value:string):void{
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm)
  }



 }
