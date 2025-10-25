import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Card } from '../card/card';
import { NgFor } from '@angular/common';
import { Movie } from '../../../core/models/movie';

@Component({
  selector: 'app-row',
  standalone: true,
  imports: [NgFor, Card],
  templateUrl: './row.html',
  styleUrl: './row.css',
})
export class Row {
@Input() title = '';
  @Input() items: Movie[] = [];

  @ViewChild('rail', { static: true })
  rail!: ElementRef<HTMLDivElement>;

  /** Scroll d’un “pas” = largeur d’une carte + gap */
  scroll(dir: 1 | -1) {
    const el = this.rail?.nativeElement;
    if (!el) return;

    const card = el.querySelector('app-card') as HTMLElement | null;
    const gap = 12; // même valeur que dans le CSS
    const step = card
      ? Math.ceil(card.getBoundingClientRect().width + gap)
      : 320;

    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  } 
}
