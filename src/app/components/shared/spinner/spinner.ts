import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-spinner',
  imports: [],
  templateUrl: './spinner.html',
  styleUrl: './spinner.css'
})
export class Spinner {
  /** size in px */
  @Input() size: number = 32;
  /** Tailwind color class or any CSS color */
  @Input() color: string = 'text-indigo-600';
  /** If true, covers parent container */
  @Input() overlay = false;
  /** Accessible label */
  @Input() label = 'Loading…';
  /** Hide label visually */
  @Input() hideLabel = true;
}