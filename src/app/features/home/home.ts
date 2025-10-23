import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Hero } from '../../shared/ui/hero/hero';
import { Row } from '../../shared/ui/row/row';
import { Navbar } from '../../shared/ui/navbar/navbar';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgFor, Hero, Row, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
private data = inject(DataService);
  vm?: {hero:any; rows:any[]};

  ngOnInit(){
    this.data.getHome().subscribe(res => this.vm = res);
  }
}
