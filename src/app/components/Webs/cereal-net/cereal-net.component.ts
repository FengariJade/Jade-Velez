import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cereal-net',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './cereal-net.component.html',
  styleUrl: './cereal-net.component.css'
})
export class CerealNetComponent {

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
