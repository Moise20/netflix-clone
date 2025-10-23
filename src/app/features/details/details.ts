import { Component, inject } from '@angular/core';
import { Navbar } from '../../shared/ui/navbar/navbar';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgIf, Navbar],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
private route = inject(ActivatedRoute);
  private data = inject(DataService);
  movie: any;

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.data.getById(id).subscribe(m => this.movie = m);
  }
}
