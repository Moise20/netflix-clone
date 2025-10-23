import { Component, inject } from '@angular/core';
import { Navbar } from '../../shared/ui/navbar/navbar';
import { Card } from '../../shared/ui/card/card';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgFor, Card, Navbar],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
private data = inject(DataService);
  q = '';
  results: any[] = [];
  onSearch(){
    const t = this.q.trim();
    if(!t){ this.results=[]; return; }
    this.data.search(t).subscribe(v => this.results = v);
  }
}
