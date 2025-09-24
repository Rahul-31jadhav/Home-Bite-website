import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  navOpen = false;

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  //   scrollTo(id: string) {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }
  meals = [
    {
      id: 1,
      image: 'img/fish.svg',
      cuisine: 'Maharashtrian',
      rating: 4.5,
      title: 'Spicy Grilled Chicken Plate',
      description: 'Tender chicken marinated in herbs and spices, served with seasonal salad and rice.',
      host: "Maria's Kitchen",
      hostImage: 'img/seller.svg',
      price: 200,
      distance: 2.4,
      lastOrder: '02:00 PM (Tomorrow)'
    },
        {
          id: 2,
      image: 'img/fish.svg',
      cuisine: 'Maharashtrian',
      rating: 4.5,
      title: 'Spicy Grilled Chicken Plate',
      description: 'Tender chicken marinated in herbs and spices, served with seasonal salad and rice.',
      host: "Maria's Kitchen",
      hostImage: 'img/seller.svg',
      price: 200,
      distance: 2.4,
      lastOrder: '02:00 PM (Tomorrow)'
    },
        {
          id: 3,
      image: 'img/fish.svg',
      cuisine: 'Maharashtrian',
      rating: 4.5,
      title: 'Spicy Grilled Chicken Plate',
      description: 'Tender chicken marinated in herbs and spices, served with seasonal salad and rice.',
      host: "Maria's Kitchen",
      hostImage: 'img/seller.svg',
      price: 200,
      distance: 2.4,
      lastOrder: '02:00 PM (Tomorrow)'
    },
        {
          id: 4,
      image: 'img/fish.svg',
      cuisine: 'Maharashtrian',
      rating: 4.5,
      title: 'Spicy Grilled Chicken Plate',
      description: 'Tender chicken marinated in herbs and spices, served with seasonal salad and rice.',
      host: "Maria's Kitchen",
      hostImage: 'img/seller.svg',
      price: 200,
      distance: 2.4,
      lastOrder: '02:00 PM (Tomorrow)'
    },
        {
          id: 5,
      image: 'img/fish.svg',
      cuisine: 'Maharashtrian',
      rating: 4.5,
      title: 'Spicy Grilled Chicken Plate',
      description: 'Tender chicken marinated in herbs and spices, served with seasonal salad and rice.',
      host: "Maria's Kitchen",
      hostImage: 'img/seller.svg',
      price: 200,
      distance: 2.4,
      lastOrder: '02:00 PM (Tomorrow)'
    },
        {
          id: 6,
      image: 'img/fish.svg',
      cuisine: 'Maharashtrian',
      rating: 4.5,
      title: 'Spicy Grilled Chicken Plate',
      description: 'Tender chicken marinated in herbs and spices, served with seasonal salad and rice.',
      host: "Maria's Kitchen",
      hostImage: 'img/seller.svg',
      price: 200,
      distance: 2.4,
      lastOrder: '02:00 PM (Tomorrow)'
    },
        {
          id: 7,
      image: 'img/fish.svg',
      cuisine: 'Maharashtrian',
      rating: 4.5,
      title: 'Spicy Grilled Chicken Plate',
      description: 'Tender chicken marinated in herbs and spices, served with seasonal salad and rice.',
      host: "Maria's Kitchen",
      hostImage: 'img/seller.svg',
      price: 200,
      distance: 2.4,
      lastOrder: '02:00 PM (Tomorrow)'
    },
        {
          id: 8,
      image: 'img/fish.svg',
      cuisine: 'Maharashtrian',
      rating: 4.5,
      title: 'Spicy Grilled Chicken Plate',
      description: 'Tender chicken marinated in herbs and spices, served with seasonal salad and rice.',
      host: "Maria's Kitchen",
      hostImage: 'img/seller.svg',
      price: 200,
      distance: 2.4,
      lastOrder: '02:00 PM (Tomorrow)'
    },
  ];

}
