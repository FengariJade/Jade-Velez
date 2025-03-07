import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  isModalOpen = false;
  modalImgSrc: string | null = null;

  readonly images: string[] = [
    '../../../assets/Image/Iconos/Recurso 17.png',
    '../../../assets/Image/Iconos/Recurso 16.png',
    '../../../assets/Image/Iconos/Recurso 15.png',
    '../../../assets/Image/Iconos/Recurso 13.png',
    '../../../assets/Image/Iconos/Recurso 10.png',
    '../../../assets/Image/Iconos/Recurso 6.png',
    '../../../assets/Image/Iconos/Recurso 7.png',
    '../../../assets/Image/Iconos/next-js.256x256.png',
    '../../../assets/Image/Iconos/Recurso 8.png',
    '../../../assets/Image/Iconos/Recurso 9.png',
    '../../../assets/Image/Iconos/Recurso 4.png',
    '../../../assets/Image/Iconos/Recurso 5.png',
    '../../../assets/Image/Iconos/pngegg.png',
    '../../../assets/Image/Iconos/bitbucket_original_wordmark_logo_icon_146622.png',
    '../../../assets/Image/Iconos/Recurso 14.png',
    '../../../assets/Image/Iconos/Recurso 1.png',
    '../../../assets/Image/Iconos/Recurso 2.png',
    '../../../assets/Image/Iconos/node-js.png',
    '../../../assets/Image/Iconos/photoshop.png',
    '../../../assets/Image/Iconos/ilustrador.png',
    '../../../assets/Image/Iconos/figma.png'
  ];

  openModal(imgSrc: string): void {
      this.modalImgSrc = imgSrc;
      this.isModalOpen = true;
  }

  closeModal(): void {
      this.isModalOpen = false;
      this.modalImgSrc = null;
  }
  
  @HostListener('document:click', ['$event'])
    onDocumentClick(event: Event): void {
      const target = event.target as HTMLElement;
      if (this.isModalOpen && target.classList.contains('img-modal')) {
        this.closeModal();
      }
  }

  @HostListener("click", ["$event"])
  onNavClick(event: Event) {
  const target = event.target as HTMLElement;
  
  if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
    event.preventDefault();

    const sectionId = target.getAttribute("href")?.substring(1);
    const section = document.getElementById(sectionId!);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }
    }
  }

}
