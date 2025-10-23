import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
   standalone: true,
  imports: [NgIf],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
@Input() img = '';
  @Input() title = '';
  @Input() subtitle?: string;
}
