import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

interface Product {
  image: string;
  images: string[];
  name: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, NgFor],
  template: `
    <div class="product-list">
      <div *ngFor="let product of products" class="product-card">
        <div class="image-gallery">
          <img [src]="getSanitizedUrl(product.image)" alt="{{ product.name }}" class="main-image">
          <div class="thumbnail-gallery">
            <img *ngFor="let img of product.images" [src]="img" alt="Thumbnail" class="thumbnail">
          </div>
        </div>
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Rating: {{ product.rating }} ⭐</p>
        <div class="actions">
          <a [href]="product.link" target="_blank"><img src="assets/kaspi/kaspi_logo.png" alt="kaspi_logo" class="kaspi">Kaspi</a>
          <button (click)="shareOnWhatsApp(product)"><img src="assets/kaspi/whats_logo.jpg" alt="whatsapp_logo" class="whatsapp">WhatsApp</button>
          <button (click)="shareOnTelegram(product)"><img src="assets/kaspi/tele_logo.png" alt="telegram_logo" class="telegram">Telegram</button>
        </div>
      </div>
    </div>
    
  `,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {//1
      image: 'assets/kaspi/wireless/wireless_mouse.jpg',
      images: [
        'assets/kaspi/wireless/wireless_mouse.jpg',
        'assets/kaspi/wireless/wireless_mouse1.jpg'
      ],
      name: 'Wireless Mouse',
      description: 'Wireless Mouse черный беспроводной',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000'
    },
    {//2
      image: 'assets/kaspi/NB_F80/NB_F80_1.jpeg',
      images: [
        'assets/kaspi/NB_F80/NB_F801.jpeg',
        'assets/kaspi/NB_F80/NB_F802.jpeg',
        'assets/kaspi/NB_F80/NB_F803.jpeg'
      ],
      name: 'Крепление NB F80',
      description: 'Крепление для монитора NB F80 черный',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/nb-f80-chernyi-110855908/?c=750000000'
    },
    {//3
      image: 'assets/kaspi/Logitech/Logitech_G102.jpg',
      images: [
        'assets/kaspi/Logitech/Logitech_G102_1.jpg',
        'assets/kaspi/Logitech/Logitech_G102_2.jpg',
        'assets/kaspi/Logitech/Logitech_G102_3.jpg'
            ],
      name: 'Мышь Logitech G102 ',
      description: 'Мышь Logitech G102 Lightsync черный',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000'
    },
    {//4
      image: 'assets/kaspi/Inova/Inova.jpg',
      images: [
        'assets/kaspi/Inova/Inova.jpg',
        'assets/kaspi/Inova/Inova2.avif',
        'assets/kaspi/Inova/Inova3.jpeg'
      ],
      name: 'Inova Death Life',
      description: 'Коврик для мыши Inova Death Life',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/inova-death-life-115283473/?c=750000000'
    },
    {//5
      image: 'assets/kaspi/Kingston/Kingston.jpg',
      images: [
        'assets/kaspi/Kingston/Kingston.jpg',
        'assets/kaspi/Kingston/Kingston2.jpg',
        'assets/kaspi/Kingston/Kingston3.jpg'
      ],
      name: 'USB Flash карта Kingston ',
      description: 'USB Flash карта Kingston DataTraveler Exodia DTX/64GB 64 Гб',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/kingston-datatraveler-exodia-dtx-64gb-64-gb-100759959/?c=750000000'
    },
    {//6
      image: 'assets/kaspi/Notestand/Notestand.jpg',
      images: [
        'assets/kaspi/Notestand/Notestand1.jpg',
        'assets/kaspi/Notestand/Notestand2.jpg',
        'assets/kaspi/Notestand/Notestand3.jpg'
      ],
      name: 'Notestand',
      description: 'Подставка для ноутбука Notestand',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/notestand-102983515/?c=750000000'
    },
    {//7
      image: 'assets/kaspi/PortCase/Portcase.jpg',
      images: [
        'assets/kaspi/PortCase/Portcase1.jpg',
        'assets/kaspi/PortCase/Portcase2.jpg',
        'assets/kaspi/PortCase/Portcase3.jpg'
      ],
      name: 'Сумка Portcase 9011 черный',
      description: 'Сумка Portcase 9011 черный',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000'
    },
    {//8
      image: 'assets/kaspi/Wifi/Wi-Fi_router.jpg',
      images: [
        'assets/kaspi/Wifi/Wi-Fi_router.jpg',
        'assets/kaspi/Wifi/Wi-Fi_router1.jpg',
        'assets/kaspi/Wifi/Wi-Fi_router2.jpg'
      ],
      name: 'Wi-Fi роутер TP-LINK TD-W8961N',
      description: 'Wi-Fi роутер TP-LINK TD-W8961N',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-td-w8961n-7600132/?c=750000000'
    },
    {//9
      image: 'assets/kaspi/termopen/Arctic_termpas.jpg',
      images: [
        'assets/kaspi/termopen/Arctic_termpas.jpg',
        'assets/kaspi/termopen/termopen2.jpeg',
        'assets/kaspi/termopen/termopen3.jpeg'
      ],
      name: 'Термопаста Arctic MX-4 4 г',
      description: 'Термопаста Arctic MX-4 4 г',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/termopasta-arctic-mx-4-4-g-109576930/?c=750000000'
    },
    {//10
      image: 'assets/kaspi/Strata/Art_strata.jpg',
      images: [
        'assets/kaspi/Strata/Art_strata.jpg',
        'assets/kaspi/Strata/Art_strata1.jpg',
        'assets/kaspi/Strata/strata.jpeg'
      ],
      name: 'Art Strata',
      description: 'Коврик для мыши Art Strata 900x400x3 рисунок',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/art-strata-900x400x3-risunok-109753958/?c=750000000'
    },
  ];

  shareOnWhatsApp(product: Product) {
    window.open(`https://wa.me/?text=${encodeURIComponent(product.link)}`, '_blank');
  }

  shareOnTelegram(product: Product) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(product.link)}`, '_blank');
  }
  constructor(private sanitizer: DomSanitizer){}

  getSanitizedUrl(imageUrl: string){
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}
