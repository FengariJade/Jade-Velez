import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-diseno',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './diseno.component.html',
  styleUrl: './diseno.component.css'
})
export class DisenoComponent {

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
