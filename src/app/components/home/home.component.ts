import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  navOpen = false;
    constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const counters: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.counter');

    // Create observer
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target as HTMLElement);
          obs.unobserve(entry.target); // run once per element
        }
      });
    }, { threshold: 0.5 }); // 50% visible

    counters.forEach(counter => observer.observe(counter));
  }

  private animateCounter(counter: HTMLElement) {
    const target = +counter.getAttribute('data-target')!;
    const suffix = counter.getAttribute('data-suffix') || '';
    let count = 0;

    const increment = target / 150; // adjust speed

    const updateCount = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count).toLocaleString() + suffix;
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target.toLocaleString() + suffix;
      }
    };

    updateCount();
  }

  

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
