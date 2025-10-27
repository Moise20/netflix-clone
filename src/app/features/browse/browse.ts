import { Component, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Navbar } from '../../shared/ui/navbar/navbar';
import { NgFor, NgIf } from '@angular/common';
import { Row } from '../../shared/ui/row/row';

@Component({
  selector: 'app-browse',
  imports: [Navbar, NgFor, NgIf, Row],
  templateUrl: './browse.html',
  styleUrl: './browse.css',
})
export class Browse {
private data = inject(DataService);
  rows: any[] = [];

  ngOnInit() {
    this.data.getHome().subscribe(res => {
      this.rows = res.rows; // ✅ affiche toutes les catégories
    });
  }
}
