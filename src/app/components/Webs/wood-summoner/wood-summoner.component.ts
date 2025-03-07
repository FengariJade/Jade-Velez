import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wood-summoner',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './wood-summoner.component.html',
  styleUrl: './wood-summoner.component.css'
})
export class WoodSummonerComponent {

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
