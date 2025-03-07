import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-puertos-online',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './puertos-online.component.html',
  styleUrl: './puertos-online.component.css'
})
export class PuertosOnlineComponent {

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
