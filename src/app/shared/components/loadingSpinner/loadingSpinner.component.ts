import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  standalone: false,
  templateUrl: './loadingSpinner.component.html',
  styleUrl: './loadingSpinner.component.css'
})
export class LoadingSpinnerComponent { }
