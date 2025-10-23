import { Component } from '@angular/core';
import { Card } from '../card/card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-row',
  standalone: true,
  imports: [NgFor, Card],
  templateUrl: './row.html',
  styleUrl: './row.css',
})
export class Row {

}
