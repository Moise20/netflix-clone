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
  @ViewChild('rail') rail!: ElementRef<HTMLDivElement>;
  scroll(dir: 1|-1) { this.rail.nativeElement.scrollBy({left: dir*300, behavior:'smooth'}); }
}
