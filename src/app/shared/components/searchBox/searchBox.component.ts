
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl:'./searchBox.component.html',
  styleUrl: './searchBox.component.css',
})
export class SearchBoxComponent {

  @Input()
  public placeHolder:string='';

  @Output()
  public onValue:EventEmitter<string>=new EventEmitter();

  public emitSearch(value:string):void{
    this.onValue.emit(value);
  }



 }
