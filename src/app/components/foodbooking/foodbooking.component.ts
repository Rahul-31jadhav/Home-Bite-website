import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-foodbooking',
  standalone:true,
  imports: [CommonModule,FooterComponent],
  templateUrl: './foodbooking.component.html',
  styleUrl: './foodbooking.component.css'
})
export class FoodbookingComponent implements  AfterViewInit    {

  @ViewChild('commentText') commentText!: ElementRef;
mealId: number | null = null;
  expanded = false;
  isLongComment = false;
   showInfo: boolean = false; 
   
   constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
   this.route.queryParams.subscribe(params => {
      this.mealId = Number(params['id']);
      console.log('Selected Meal ID:', this.mealId);
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const element = this.commentText.nativeElement;
      if (element.scrollHeight > element.clientHeight) {
        this.isLongComment = true;
      }
    }, 0);
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }
  goToFoodBooking(meals: any) {
  this.router.navigate(['/foodbooking'], { queryParams: { id: meals.id } });
}
}
